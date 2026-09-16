import os
import json
import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt
import subprocess
import sys
import requests
import streamlit.components.v1 as components

# Import agronomic catalog
sys.path.append(os.path.join(os.path.dirname(__file__), 'scripts'))
import agri_catalog  # type: ignore[reportMissingImports]
import bucket_model  # type: ignore[reportMissingImports]
from irrigation_engine import calculate_water_metrics, weather_risks  # type: ignore[reportMissingImports]

st.set_page_config(page_title="Smart Irrigation AI Dashboard", layout="wide", page_icon="🌱")

st.markdown("""
<style>
    :root {
        --green: #8ee38c;
        --mint: #dff8dd;
        --ink: #102018;
        --amber: #f5bb63;
        --night: #101b18;
        --night-soft: #172821;
    }
    .stApp {
        background: #050807;
        color: #eff9eb;
    }
    .block-container { padding-top: 2rem; max-width: 1500px; }
    .hero {
        position: relative;
        overflow: hidden;
        padding: 2.25rem 2.2rem 2rem;
        border-radius: 22px;
        background: linear-gradient(120deg, #102018 0%, #1e4030 58%, #315c45 100%);
        color: white;
        margin-bottom: .8rem;
        box-shadow: 0 18px 45px rgba(16, 32, 24, .18);
        animation: rise-in .65s ease-out both;
    }
    .hero:after {
        content: "";
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(90deg, transparent 0, transparent 48px, rgba(255,255,255,.035) 49px);
        pointer-events: none;
    }
    .hero h1 { margin: 0; font-size: clamp(2.2rem, 4vw, 4.6rem); line-height: .95; letter-spacing: -.03em; font-weight: 800; }
    .hero p { max-width: 660px; margin: .9rem 0 0; color: #cce7c9; font-size: 1.02rem; }
    .eyebrow { color: var(--green); font-size: .72rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; margin-bottom: .8rem; }
    .command-ribbon { display: flex; gap: .65rem; flex-wrap: wrap; margin: .65rem 0 1.1rem; animation: rise-in .8s ease-out both; }
    .command-chip { background: var(--night); color: #e7f7e3; border: 1px solid #345443; padding: .48rem .75rem; border-radius: 999px; font-size: .78rem; }
    .command-chip b { color: var(--green); }
    [data-testid="stMetric"] {
        background: var(--mint);
        border: 1px solid #d2e2d0;
        padding: .75rem;
        border-radius: 14px;
        box-shadow: 0 8px 20px rgba(37, 72, 48, .06);
    }
    [data-testid="stAppViewContainer"], [data-testid="stHeader"] { background: #050807; }
    [data-testid="stMarkdownContainer"], .stCaption, label { color: #d5e6d2 !important; }
    [data-testid="stMetricValue"] { color: var(--ink); }
    .stButton > button { border-radius: 999px; font-weight: 750; transition: transform .2s ease, box-shadow .2s ease; }
    .stButton > button:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(16, 32, 24, .15); }
    .status-strip {
        border: 1px solid #cfe2c9;
        border-left: 5px solid #4f9b5c;
        background: rgba(245, 248, 243, .9);
        padding: .85rem 1rem;
        border-radius: 12px;
        color: var(--ink);
        box-shadow: 0 10px 24px rgba(36, 75, 46, .05);
    }
    @keyframes rise-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
""", unsafe_allow_html=True)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
RESULTS_DIR = os.path.join(BASE_DIR, 'results')
FIELDS_FILE = os.path.join(DATA_DIR, 'fields.geojson')
GLOBE_COMPONENT = components.declare_component(
    "smart_irrigation_globe",
    path=os.path.join(BASE_DIR, "globe_component", "dist"),
)

# App Header
st.markdown("""
<div class="hero">
    <div class="eyebrow">PS12 / FIELD INTELLIGENCE SYSTEM</div>
    <h1>Smart Irrigation Control Room</h1>
    <p>Field-level soil moisture intelligence powered by weather forecasts and FAO-56 crop agronomy.</p>
</div>
""", unsafe_allow_html=True)

# Function to run the full backend pipeline
def execute_pipeline():
    py_exec = sys.executable
    steps = ["fetch_forecast.py", "run_pipeline.py", "plot_demo.py", "zip_artifacts.py"]
    results = []
    for step in steps:
        result = subprocess.run(
            [py_exec, os.path.join(BASE_DIR, "scripts", step)],
            capture_output=True,
            text=True,
            check=False,
        )
        results.append({"step": step, "returncode": result.returncode, "output": result.stdout + result.stderr})
        if result.returncode != 0:
            break
    return results


@st.cache_data(show_spinner=False, ttl=86400)
def reverse_geocode(latitude, longitude):
    """Resolve a clicked map coordinate to a readable place name."""
    try:
        response = requests.get(
            "https://nominatim.openstreetmap.org/reverse",
            params={
                "lat": latitude,
                "lon": longitude,
                "format": "jsonv2",
                "zoom": 10,
            },
            headers={"User-Agent": "smart-irrigation-dashboard/1.0"},
            timeout=5,
            verify=False,
        )
        if response.ok:
            address = response.json().get("address", {})
            return ", ".join(
                value for value in [
                    address.get("village"),
                    address.get("town"),
                    address.get("city"),
                    address.get("state"),
                    address.get("country"),
                ] if value
            ) or response.json().get("display_name", "Selected map location")
    except requests.RequestException:
        pass
    return "Selected map location"

# Load current fields
if not os.path.exists(FIELDS_FILE):
    st.error("Fields file not found.")
    st.stop()

with open(FIELDS_FILE, 'r') as f:
    fields_data = json.load(f)

fields_dict = {feat['properties']['id']: feat for feat in fields_data['features']}

next_field_number = 1
while f"field_{next_field_number}" in fields_dict:
    next_field_number += 1
next_field_id = f"field_{next_field_number}"
next_field_name = f"Field {next_field_number}"


def persist_new_field(field_id, field_name, crop_name, properties, coordinates):
    """Persist a new field before running the forecast pipeline."""
    if not field_id.strip():
        raise ValueError("Field ID is required.")
    if field_id in fields_dict:
        raise ValueError(f"Field ID '{field_id}' already exists.")
    new_properties = dict(properties)
    new_properties.update({
        "id": field_id,
        "name": field_name.strip() or field_id,
        "crop_type": crop_name,
    })
    fields_data['features'].append({
        "type": "Feature",
        "properties": new_properties,
        "geometry": {"type": "Point", "coordinates": [float(coordinates[0]), float(coordinates[1])]},
    })
    with open(FIELDS_FILE, 'w') as f:
        json.dump(fields_data, f, indent=2)
    return field_id

st.markdown(
    f'<div class="command-ribbon">'
    f'<span class="command-chip"><b>LIVE</b> field telemetry</span>'
    f'<span class="command-chip"><b>{len(fields_dict):02d}</b> configured fields</span>'
    f'<span class="command-chip"><b>7D</b> forecast horizon</span>'
    f'<span class="command-chip"><b>FAO-56</b> crop model</span>'
    f'</div>',
    unsafe_allow_html=True,
)

# Main field workspace: choose an existing field and optionally move it on the map.
field_ids = list(fields_dict.keys())
field_labels = {
    field_id: fields_dict[field_id]['properties'].get('name', field_id)
    for field_id in field_ids
}

queued_active_field_id = st.session_state.pop("queued_active_field_id", None)
if queued_active_field_id in fields_dict:
    st.session_state.pop("active_field_id", None)

if (
    "active_field_id" not in st.session_state
    or st.session_state["active_field_id"] not in fields_dict
    and st.session_state["active_field_id"] != "__new_field__"
):
    st.session_state["active_field_id"] = field_ids[0]

previous_field_id = queued_active_field_id or st.session_state["active_field_id"]
map_field_id = previous_field_id if previous_field_id in fields_dict else field_ids[0]

selected_field_id = map_field_id
selected_feature = fields_dict[map_field_id]
selected_props = selected_feature['properties']
coords = selected_feature['geometry']['coordinates']
pending_coords = st.session_state.get("pending_coords")
pending_location_name = st.session_state.get("pending_location_name")
map_center = pending_coords or coords

st.subheader("📍 Choose field location")
st.caption("Orbit and zoom the Earth. Click any point on the globe to set the field coordinates.")
location_name = st.session_state.get("pending_location_name", field_labels.get(map_field_id, "Selected map location"))
field_points = [
    {
        "id": field_id,
        "name": feature["properties"].get("name", field_id),
        "latitude": float(feature["geometry"]["coordinates"][1]),
        "longitude": float(feature["geometry"]["coordinates"][0]),
    }
    for field_id, feature in fields_dict.items()
]
globe_value = GLOBE_COMPONENT(
    latitude=float(map_center[1]),
    longitude=float(map_center[0]),
    location_name=location_name,
    field_points=field_points,
    key="threejs_location_globe",
    default=None,
)
if isinstance(globe_value, dict) and "latitude" in globe_value and "longitude" in globe_value:
    globe_coords = [float(globe_value["longitude"]), float(globe_value["latitude"])]
    globe_signature = [round(globe_coords[0], 5), round(globe_coords[1], 5)]
    if globe_signature != st.session_state.get("last_globe_signature"):
        st.session_state["pending_coords"] = globe_coords
        st.session_state["pending_location_name"] = reverse_geocode(globe_coords[1], globe_coords[0])
        st.session_state["last_globe_signature"] = globe_signature
        st.rerun()
location_name = st.session_state.get("pending_location_name", location_name)
st.success(f"📌 Selected location: **{location_name}**")
st.caption(f"Active coordinates: longitude {coords[0]:.4f}, latitude {coords[1]:.4f}")

field_options = ["__new_field__"] + field_ids
selected_field_id = st.selectbox(
    "Select an existing field or create a new field",
    field_options,
    index=field_options.index(previous_field_id) if previous_field_id in field_options else 0,
    format_func=lambda x: "➕ Create new field" if x == "__new_field__" else field_labels[x],
    key="field_selector",
)
st.session_state["active_field_id"] = selected_field_id
if selected_field_id != previous_field_id and selected_field_id != "__new_field__":
    st.session_state.pop("pending_coords", None)
    st.session_state.pop("pending_location_name", None)
is_new_field = selected_field_id == "__new_field__"
if is_new_field:
    new_field_id = st.text_input(
        "New field ID",
        value=next_field_id,
        key=f"new_field_id_{len(fields_dict)}",
    )
    new_field_name = st.text_input(
        "New field name",
        value=next_field_name,
        key=f"new_field_name_{len(fields_dict)}",
    )
    new_crop = st.selectbox("New field crop", list(agri_catalog.FAO_CROPS.keys()))
    selected_field_id = "new_field"
    selected_props = {
        "id": new_field_id,
        "name": new_field_name,
        "crop_type": new_crop,
        "soil_type": "Loam (Standard Agricultural Soil)",
        "field_capacity_mm": 150.0,
        "wilting_point_mm": 50.0,
        "initial_moisture_mm": 75.0,
        "kc": agri_catalog.FAO_CROPS[new_crop]["kc"],
    }
    selected_feature = {"properties": selected_props, "geometry": {"coordinates": coords}}
    # If a previous run already created this output, use the real ID for the
    # monitor instead of looking for the temporary "new_field" filename.
    pending_output_csv = os.path.join(RESULTS_DIR, f"{new_field_id}_soilmoisture.csv")
    if os.path.exists(pending_output_csv):
        selected_field_id = new_field_id
else:
    selected_feature = fields_dict[selected_field_id]
    selected_props = selected_feature['properties']
coords = st.session_state.get("pending_coords", coords if is_new_field else selected_feature['geometry']['coordinates'])
active_coords = [float(coords[0]), float(coords[1])]
coords = active_coords

delete_col, delete_info_col = st.columns([1, 3])
with delete_col:
    delete_field = st.button(
        "🗑️ Delete selected field",
        disabled=is_new_field or len(fields_dict) <= 1,
        help="Delete the selected configured field. At least one field must remain.",
    )
with delete_info_col:
    if not is_new_field:
        st.caption(f"Selected field coordinates: {coords[1]:.5f}, {coords[0]:.5f}")

if delete_field and not is_new_field:
    fields_data["features"] = [
        feature for feature in fields_data["features"]
        if feature["properties"].get("id") != selected_field_id
    ]
    remaining_ids = [feature["properties"]["id"] for feature in fields_data["features"]]
    with open(FIELDS_FILE, "w") as f:
        json.dump(fields_data, f, indent=2)
    st.session_state["queued_active_field_id"] = remaining_ids[0]
    st.session_state.pop("pending_coords", None)
    st.session_state.pop("pending_location_name", None)
    st.rerun()

st.sidebar.header("⚙️ Adjust Active Field")
edited_kc = st.sidebar.number_input(
    "Crop Coefficient (Kc)",
    min_value=0.0,
    value=float(selected_props.get('kc', 1.0)),
    step=0.01,
    key=f"kc_{selected_field_id}"
)
edited_soil = st.sidebar.text_input(
    "Inferred / Soil Type",
    value=str(selected_props.get('soil_type', 'Standard Soil')),
    key=f"soil_{selected_field_id}"
)
edited_fc = st.sidebar.number_input(
    "Field Capacity (FC) in mm",
    min_value=0.1,
    value=float(selected_props.get('field_capacity_mm', 150.0)),
    step=1.0,
    key=f"fc_{selected_field_id}"
)
edited_wp = st.sidebar.number_input(
    "Wilting Point (WP) in mm",
    min_value=0.0,
    value=float(selected_props.get('wilting_point_mm', 50.0)),
    step=1.0,
    key=f"wp_{selected_field_id}"
)
edited_initial_moisture = st.sidebar.number_input(
    "Initial Soil Moisture (mm)",
    min_value=0.0,
    value=float(selected_props.get('initial_moisture_mm', 75.0)),
    step=1.0,
    key=f"initial_moisture_{selected_field_id}"
)

if edited_wp >= edited_fc:
    st.sidebar.error("WP must be lower than FC.")

st.sidebar.markdown(f"""
### 📍 Field Specifications:
- **Location**: `{location_name}`  
    `Lon: {active_coords[0]:.4f}, Lat: {active_coords[1]:.4f}`
- **Crop**: `{selected_props.get('crop_type', 'N/A')}`
- **Crop Factor ($K_c$)**: `{selected_props.get('kc', 1.0)}`
- **Soil Texture**: `{selected_props.get('soil_type', 'N/A')}`
- **Field Capacity ($FC$)**: `{selected_props.get('field_capacity_mm', 150)} mm`
- **Wilting Point ($WP$)**: `{selected_props.get('wilting_point_mm', 50)} mm`
- **Current Moisture ($S_0$)**: `{selected_props.get('initial_moisture_mm', 75)} mm`
""")

if st.sidebar.button("✅ Apply Changes", type="primary"):
    if edited_wp >= edited_fc:
        st.sidebar.error("Cannot run: WP must be lower than FC.")
    else:
        selected_props.update({
            "kc": edited_kc,
            "soil_type": edited_soil.strip() or "Standard Soil",
            "field_capacity_mm": edited_fc,
            "wilting_point_mm": edited_wp,
            "initial_moisture_mm": edited_initial_moisture
        })
        if is_new_field:
            try:
                saved_field_id = persist_new_field(
                    new_field_id, new_field_name, new_crop, selected_props, coords
                )
            except ValueError as error:
                st.sidebar.error(str(error))
                st.stop()
            st.session_state["queued_active_field_id"] = saved_field_id
        else:
            selected_feature['geometry']['coordinates'] = coords
            with open(FIELDS_FILE, 'w') as f:
                json.dump(fields_data, f, indent=2)
        st.sidebar.success("Changes applied. Run the pipeline to refresh forecasts and graphs.")
        st.rerun()

run_button_label = "🚀 Create Field & Run Pipeline" if is_new_field else "🚀 Run Pipeline"
if st.button(run_button_label, type="primary"):
    if is_new_field:
        if edited_wp >= edited_fc:
            st.error("Cannot run: WP must be lower than FC.")
            st.stop()
        selected_props.update({
            "id": new_field_id,
            "name": new_field_name,
            "crop_type": new_crop,
            "kc": edited_kc,
            "soil_type": edited_soil.strip() or "Standard Soil",
            "field_capacity_mm": edited_fc,
            "wilting_point_mm": edited_wp,
            "initial_moisture_mm": edited_initial_moisture,
        })
        try:
            saved_field_id = persist_new_field(
                new_field_id, new_field_name, new_crop, selected_props, coords
            )
        except ValueError as error:
            st.error(str(error))
            st.stop()
        st.session_state["queued_active_field_id"] = saved_field_id
        st.session_state["last_pipeline_field_id"] = saved_field_id

    with st.spinner("Fetching latest weather from OpenWeatherMap & simulating..."):
        pipeline_results = execute_pipeline()
    failed = next((result for result in pipeline_results if result["returncode"] != 0), None)
    if failed:
        st.sidebar.error(f"Pipeline failed at {failed['step']}.")
        st.session_state["pipeline_error"] = failed["output"][-2000:]
    else:
        output_field_id = st.session_state.get("last_pipeline_field_id", selected_field_id)
        output_csv = os.path.join(RESULTS_DIR, f"{output_field_id}_soilmoisture.csv")
        if os.path.exists(output_csv):
            st.success(f"Pipeline updated for `{output_field_id}`. Forecast graph and atmospheric data are ready.")
        else:
            st.error(f"Pipeline completed, but `{os.path.basename(output_csv)}` was not generated.")
            st.session_state["pipeline_error"] = "The pipeline did not produce the selected field output CSV."
    st.rerun()

if st.session_state.get("pipeline_error"):
    with st.expander("Pipeline diagnostics"):
        st.code(st.session_state["pipeline_error"])

metadata_file = os.path.join(RESULTS_DIR, "run_metadata.json")
active_metadata = {}
if os.path.exists(metadata_file):
    with open(metadata_file, "r") as metadata_handle:
        run_metadata = json.load(metadata_handle)
    active_metadata = next((item for item in run_metadata.get("fields", []) if item["field_id"] == selected_field_id), {})
    source = active_metadata.get("forecast_source", "Unknown")
    st.sidebar.info(f"Forecast source: {source}\n\nLast run: {run_metadata.get('run_timestamp_utc', 'Unknown')}")

# Main monitor
tab1 = st.container()

with tab1:
    col1, col2 = st.columns([1.15, 0.85])

    csv_file = os.path.join(RESULTS_DIR, f"{selected_field_id}_soilmoisture.csv")
    recs_file = os.path.join(RESULTS_DIR, f"{selected_field_id}_recs.json")

    if os.path.exists(csv_file):
        df = pd.read_csv(csv_file)
        df['date'] = pd.to_datetime(df['date'])

        try:
            with open(recs_file, 'r') as rf:
                recs = json.load(rf)
        except Exception:
            recs = []

        fc = selected_props.get('field_capacity_mm', 150.0)
        wp = selected_props.get('wilting_point_mm', 50.0)
        metrics = calculate_water_metrics(df, recs, fc)
        source_label = active_metadata.get("forecast_source", "Unknown").title()
        latest_soil = float(df["soil_mm"].iloc[-1])
        moisture_state = "Needs attention" if latest_soil < fc * 0.5 else "Within target range"
        st.markdown(
            f'<div class="status-strip"><strong>{selected_props.get("name", selected_field_id)}</strong> '
            f'&nbsp; · &nbsp; {moisture_state} &nbsp; · &nbsp; Forecast: {source_label} '
            f'&nbsp; · &nbsp; Latest moisture: {latest_soil:.1f} mm</div>',
            unsafe_allow_html=True,
        )
        metric_cols = st.columns(5)
        metric_cols[0].metric("Recommended water", f"{metrics['recommended_water_mm']:.1f} mm")
        metric_cols[1].metric("Estimated water saved", f"{metrics['estimated_water_saved_mm']:.1f} mm")
        metric_cols[2].metric("Irrigation events", str(len(recs)))
        metric_cols[3].metric("Safe moisture days", f"{metrics['safe_moisture_days']}/{metrics['forecast_days']}")
        metric_cols[4].metric("Forecast source", active_metadata.get("forecast_source", "Unknown"))

        st.subheader("⚠️ Weather & Crop Risk Monitor")
        for risk in weather_risks(df, fc, wp):
            if "No major" in risk:
                st.success(risk)
            else:
                st.warning(risk)

        with st.expander("🧪 What-if scenario comparison"):
            scenario = st.selectbox(
                "Scenario",
                ["Normal forecast", "Hot and dry", "Heavy rainfall", "Custom Kc"],
                key=f"scenario_{selected_field_id}",
            )
            scenario_kc = st.number_input(
                "Scenario Kc",
                min_value=0.0,
                value=float(selected_props.get("kc", 1.0)),
                step=0.01,
                key=f"scenario_kc_{selected_field_id}",
            )
            scenario_df = df.copy()
            if scenario == "Hot and dry":
                scenario_df["temp_C"] = scenario_df["temp_C"] + 5.0
                scenario_df["precip_mm"] = 0.0
            elif scenario == "Heavy rainfall":
                scenario_df["precip_mm"] = scenario_df["precip_mm"] + 10.0
            scenario_soil = bucket_model.simulate_bucket(
                scenario_df["date"],
                scenario_df["precip_mm"],
                0.6 * scenario_df["temp_C"],
                selected_props.get("initial_moisture_mm", 75.0),
                fc,
                wp,
                scenario_kc,
            )
            scenario_df["scenario_soil_mm"] = scenario_soil.values
            comparison = pd.DataFrame({
                "date": scenario_df["date"].dt.strftime("%Y-%m-%d"),
                "normal_soil_mm": df["soil_mm"].round(1),
                "scenario_soil_mm": scenario_df["scenario_soil_mm"].round(1),
            })
            st.line_chart(comparison.set_index("date"))

        with st.expander("📡 Optional sensor-ready input"):
            st.caption("Upload a CSV with date and soil_mm columns to compare observed sensor readings with the simulation.")
            sensor_file = st.file_uploader("Sensor CSV", type=["csv"], key=f"sensor_{selected_field_id}")
            if sensor_file is not None:
                sensor_df = pd.read_csv(sensor_file)
                required_columns = {"date", "soil_mm"}
                if not required_columns.issubset(sensor_df.columns):
                    st.error("Sensor CSV must contain date and soil_mm columns.")
                else:
                    sensor_df["date"] = pd.to_datetime(sensor_df["date"])
                    sensor_df = sensor_df.rename(columns={"soil_mm": "observed_soil_mm"})
                    sensor_compare = df[["date", "soil_mm"]].merge(sensor_df[["date", "observed_soil_mm"]], on="date", how="inner")
                    st.line_chart(sensor_compare.set_index("date"))
                    st.dataframe(sensor_compare, use_container_width=True)

        with col1:
            chart_controls = st.columns([1, 1])
            with chart_controls[0]:
                chart_mode = st.radio(
                    "Chart view",
                    ["Moisture + rain", "Temperature + PET", "Soil moisture only"],
                    horizontal=True,
                    key=f"chart_mode_{selected_field_id}",
                )
            with chart_controls[1]:
                visible_days = st.slider(
                    "Forecast window",
                    min_value=1,
                    max_value=len(df),
                    value=len(df),
                    key=f"visible_days_{selected_field_id}",
                )
            chart_df = df.iloc[:visible_days]
            st.subheader(f"📈 Forecast response: {selected_props.get('name')}")
            fig, ax1 = plt.subplots(figsize=(8.5, 4.8))

            ax1.set_xlabel('Date')
            if chart_mode == "Temperature + PET":
                ax1.set_ylabel('Temperature (C)', color='tab:red')
                ax1.plot(chart_df['date'], chart_df['temp_C'], color='tab:red', marker='o', linewidth=2.5, label='Temperature')
                ax2 = ax1.twinx()
                ax2.set_ylabel('PET (mm)', color='tab:orange')
                ax2.plot(chart_df['date'], chart_df['pet_mm'], color='tab:orange', marker='s', label='PET')
            else:
                ax1.set_ylabel('Soil Moisture (mm)', color='tab:blue')
                ax1.plot(chart_df['date'], chart_df['soil_mm'], color='tab:blue', marker='o', linewidth=2.5, label='Simulated Soil Moisture')
                ax1.axhline(y=fc * 0.5, color='orange', linestyle=':', linewidth=2, label=f'50% FC Stress Threshold ({fc*0.5:.0f}mm)')
                ax1.axhline(y=fc, color='green', linestyle='--', alpha=0.5, label=f'Field Capacity ({fc:.0f}mm)')
                if chart_mode == "Moisture + rain":
                    ax2 = ax1.twinx()
                    ax2.set_ylabel('Precipitation (mm)', color='tab:cyan')
                    ax2.bar(chart_df['date'], chart_df['precip_mm'], color='tab:cyan', alpha=0.45, label='Forecast Rain (mm)')

            # Recommendation vertical lines
            for rec in recs:
                rec_date = pd.to_datetime(rec['date'])
                if rec_date > chart_df['date'].iloc[-1]:
                    continue
                ax1.axvline(x=rec_date, color='red', linestyle='--', alpha=0.85)
                ax1.text(rec_date, chart_df['soil_mm'].min() + 3, f" IRRIGATE ({rec['depth_mm']:.1f}mm)", color='red', rotation=90, verticalalignment='bottom', fontweight='bold')

            handles, labels = ax1.get_legend_handles_labels()
            if 'ax2' in locals():
                extra_handles, extra_labels = ax2.get_legend_handles_labels()
                handles.extend(extra_handles)
                labels.extend(extra_labels)
            ax1.legend(handles, labels, loc='upper left', fontsize=8.5)
            fig.tight_layout()
            st.pyplot(fig)

        with col2:
            st.subheader("📋 7-Day Atmospheric & Soil Data")
            st.dataframe(df.style.format({
                "precip_mm": "{:.2f}",
                "temp_C": "{:.1f}",
                "pet_mm": "{:.2f}",
                "soil_mm": "{:.2f}"
            }), use_container_width=True)

            st.subheader("💧 Actionable Recommendations")
            if recs:
                for r in recs:
                    st.warning(f"🚨 **Date:** `{r['date']}` | **Refill Depth:** `{r['depth_mm']} mm`  \n*{r['reason']}*")
            else:
                st.success("✅ **Optimal Moisture:** Soil water remains above stress threshold. No irrigation needed.")
    else:
        st.info("No forecast output for this field yet. Click **Run Pipeline** to fetch weather and generate the graph and atmospheric data.")

    st.markdown("---")
    st.subheader(f"📅 7-Day Irrigation Schedule: {selected_props.get('name', selected_field_id)}")
    sched_file = os.path.join(RESULTS_DIR, "irrigation_schedule.csv")
    if os.path.exists(sched_file):
        sched_df = pd.read_csv(sched_file)
        if "field_id" in sched_df.columns:
            selected_sched_df = sched_df[sched_df["field_id"] == selected_field_id]
        else:
            selected_sched_df = pd.DataFrame()

        if selected_sched_df.empty:
            st.success("No irrigation is recommended for the selected field in this 7-day forecast.")
        else:
            st.dataframe(selected_sched_df, use_container_width=True)
    else:
        st.warning("Schedule file not found. Please run the pipeline.")
