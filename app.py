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
from irrigation_engine import calculate_water_metrics, weather_risks, recommend_irrigation  # type: ignore[reportMissingImports]

st.set_page_config(
    page_title="Smart Irrigation AI Dashboard",
    layout="wide",
    page_icon="🌱",
    initial_sidebar_state="expanded",
)

st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap');
    
    :root {
        --google-green: #38e078;
        --google-mint: #a6f28f;
        --google-dark-green: #142a1e;
        --surface-glass: rgba(12, 24, 18, 0.75);
        --surface-glass-border: rgba(56, 224, 120, 0.25);
        --surface-elevated: rgba(18, 36, 27, 0.85);
        --text-primary: #eff9eb;
        --text-secondary: #b0d4b8;
        --text-muted: #6e9477;
        --void-bg: #050807;
    }
    
    /* Base Reset & Typography */
    html, body, .stApp {
        background-color: var(--void-bg) !important;
        color: var(--text-primary) !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        -webkit-font-smoothing: antialiased;
    }

    [data-testid="stAppViewContainer"] {
        background: var(--void-bg) !important;
    }

    [data-testid="stHeader"] {
        background: transparent !important;
        height: 0px !important;
        z-index: 1 !important;
    }

    /* Container constraints with ample top clearance for navbar */
    .block-container {
        padding-top: 3.8rem !important;
        padding-left: 2.25rem !important;
        padding-right: 2.25rem !important;
        padding-bottom: 4rem !important;
        max-width: 1560px !important;
        background: var(--void-bg) !important;
    }

    /* Top App Navbar */
    .app-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 1.5rem;
        background: rgba(8, 16, 12, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--surface-glass-border);
        border-radius: 16px;
        margin-bottom: 1.25rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .app-brand {
        display: flex;
        align-items: center;
        gap: 0.85rem;
    }
    .app-logo-icon {
        font-size: 1.6rem;
    }
    .app-logo-text {
        font-family: 'Outfit', sans-serif;
        font-size: 1.45rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, #ffffff 30%, var(--google-mint) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .app-badge {
        background: rgba(56, 224, 120, 0.12);
        border: 1px solid rgba(56, 224, 120, 0.35);
        color: var(--google-mint);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.25rem 0.65rem;
        border-radius: 999px;
    }
    .status-live-pill {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(14, 28, 21, 0.85);
        border: 1px solid rgba(56, 224, 120, 0.3);
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--google-mint);
    }
    .live-dot {
        width: 7px;
        height: 7px;
        background-color: var(--google-green);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--google-green);
        animation: pulse-glow 1.8s infinite;
    }
    @keyframes pulse-glow {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.85); }
    }

    /* Globe Embed Container */
    [data-testid="stCustomComponentV1"] {
        position: relative !important;
        width: 100% !important;
        height: 760px !important;
        border-radius: 18px !important;
        overflow: hidden !important;
        border: 1px solid var(--surface-glass-border) !important;
        box-shadow: 0 18px 48px rgba(0, 0, 0, 0.6) !important;
    }
    [data-testid="stCustomComponentV1"] iframe {
        width: 100% !important;
        height: 760px !important;
        border: 0 !important;
    }

    /* Saved Field Cards Network Below Map */
    .network-container {
        margin: 1.4rem 0 1.2rem;
        padding: 1.25rem 1.4rem;
        background: rgba(8, 16, 12, 0.75);
        backdrop-filter: blur(16px);
        border: 1px solid var(--surface-glass-border);
        border-radius: 18px;
        box-shadow: 0 10px 32px rgba(0, 0, 0, 0.4);
    }
    .network-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.9rem;
    }
    .network-title {
        font-family: 'Outfit', sans-serif;
        font-size: 1.05rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: var(--google-mint);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .field-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 0.85rem;
    }
    .field-card {
        background: rgba(14, 28, 20, 0.8);
        border: 1px solid rgba(56, 224, 120, 0.2);
        border-radius: 14px;
        padding: 0.85rem 1rem;
        transition: all 0.2s ease;
        position: relative;
    }
    .field-card:hover {
        border-color: rgba(56, 224, 120, 0.45);
        background: rgba(20, 40, 29, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .field-card.active-field {
        border-color: var(--google-green);
        background: rgba(22, 44, 32, 0.95);
        box-shadow: 0 0 18px rgba(56, 224, 120, 0.2);
    }
    .field-card-name {
        font-family: 'Outfit', sans-serif;
        font-size: 0.96rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.35rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .field-card-crop {
        display: inline-block;
        font-size: 0.72rem;
        font-weight: 700;
        background: rgba(56, 224, 120, 0.15);
        color: var(--google-mint);
        border: 1px solid rgba(56, 224, 120, 0.3);
        border-radius: 999px;
        padding: 0.15rem 0.55rem;
    }
    .field-card-coords {
        font-size: 0.76rem;
        color: var(--text-secondary);
        margin-top: 0.3rem;
        font-family: 'Inter', monospace;
    }
    .field-card-soil {
        font-size: 0.74rem;
        color: var(--text-muted);
        margin-top: 0.2rem;
    }

    /* Map Click Action Bar */
    .map-click-bar {
        background: rgba(14, 30, 22, 0.9);
        border: 1px solid var(--google-green);
        border-radius: 14px;
        padding: 0.85rem 1.25rem;
        margin: 1rem 0;
        box-shadow: 0 0 20px rgba(56, 224, 120, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    /* Metrics Cards */
    [data-testid="stMetric"] {
        background: var(--surface-glass) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
        border: 1px solid var(--surface-glass-border) !important;
        padding: 0.95rem 1.15rem !important;
        border-radius: 16px !important;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35) !important;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
    }
    [data-testid="stMetric"]:hover {
        transform: translateY(-2px) !important;
        border-color: rgba(56, 224, 120, 0.45) !important;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), 0 0 15px rgba(56, 224, 120, 0.12) !important;
    }
    [data-testid="stMetricLabel"] {
        color: var(--text-secondary) !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 0.78rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.02em !important;
        text-transform: uppercase !important;
    }
    [data-testid="stMetricValue"] {
        color: var(--google-mint) !important;
        font-family: 'Outfit', sans-serif !important;
        font-size: 1.85rem !important;
        font-weight: 800 !important;
        letter-spacing: -0.02em !important;
        text-shadow: 0 0 16px rgba(56, 224, 120, 0.25) !important;
    }

    /* Farmer Guide Panel */
    .farmer-panel {
        background: linear-gradient(135deg, rgba(14, 28, 21, 0.88) 0%, rgba(19, 39, 29, 0.88) 100%);
        border: 1px solid var(--surface-glass-border);
        border-radius: 16px;
        padding: 1.15rem 1.25rem;
        margin-bottom: 1.25rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
    .farmer-panel-title {
        font-family: 'Outfit', sans-serif;
        font-size: 1.05rem;
        font-weight: 800;
        color: var(--google-mint);
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .status-traffic {
        padding: 0.65rem 0.95rem;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.85rem;
        display: flex;
        align-items: center;
        gap: 0.65rem;
    }
    .status-traffic.good {
        background: rgba(56, 224, 120, 0.15);
        border: 1px solid rgba(56, 224, 120, 0.35);
        color: #eff9eb;
    }
    .status-traffic.warning {
        background: rgba(255, 196, 92, 0.15);
        border: 1px solid rgba(255, 196, 92, 0.35);
        color: #fff2d1;
    }
    .status-traffic.alert {
        background: rgba(56, 224, 120, 0.25);
        border: 1px solid var(--google-green);
        color: #ffffff;
    }
    .farmer-stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.65rem;
        margin-bottom: 0.85rem;
    }
    .farmer-stat-box {
        background: rgba(8, 16, 12, 0.6);
        border: 1px solid rgba(56, 224, 120, 0.18);
        border-radius: 10px;
        padding: 0.6rem 0.8rem;
    }
    .farmer-stat-label {
        font-size: 0.72rem;
        color: var(--text-muted);
        text-transform: uppercase;
        font-weight: 600;
    }
    .farmer-stat-val {
        font-family: 'Outfit', sans-serif;
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--google-mint);
        margin-top: 0.15rem;
    }
    .farmer-tip-box {
        background: rgba(8, 16, 12, 0.6);
        border-left: 3px solid var(--google-green);
        border-radius: 6px;
        padding: 0.55rem 0.8rem;
        font-size: 0.82rem;
        color: #cce7cf;
        line-height: 1.45;
    }

    /* Sidebar Styling */
    [data-testid="stSidebar"], [data-testid="stSidebarContent"] {
        background: rgba(6, 12, 9, 0.9) !important;
        backdrop-filter: blur(24px) !important;
        border-right: 1px solid var(--surface-glass-border) !important;
    }
    [data-testid="stSidebar"] h1, [data-testid="stSidebar"] h2, [data-testid="stSidebar"] h3 {
        font-family: 'Outfit', sans-serif !important;
        letter-spacing: -0.02em !important;
        color: #ffffff !important;
    }

    /* Headings */
    h1, h2, h3, h4 {
        font-family: 'Outfit', sans-serif !important;
        color: #ffffff !important;
        letter-spacing: -0.03em !important;
        font-weight: 700 !important;
    }

    /* Form Controls: Inputs, Selects, Sliders, Radios - ZERO RED */
    input, textarea, [data-baseweb="select"] > div, [data-baseweb="input"] > div {
        background: rgba(12, 23, 17, 0.8) !important;
        border: 1px solid var(--surface-glass-border) !important;
        border-radius: 10px !important;
        color: var(--text-primary) !important;
        font-family: 'Inter', sans-serif !important;
    }
    input:focus, textarea:focus, [data-baseweb="select"] > div:focus-within {
        border-color: var(--google-green) !important;
        box-shadow: 0 0 0 2px rgba(56, 224, 120, 0.25) !important;
    }
    [data-baseweb="select"] svg {
        fill: var(--google-mint) !important;
    }

    /* Streamlit Radio Buttons - Force Green, Kill Red */
    div[data-testid="stRadio"] [role="radiogroup"] > label {
        color: var(--text-secondary) !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 0.88rem !important;
        font-weight: 500 !important;
    }
    div[data-testid="stRadio"] [role="radiogroup"] > label > div:first-child {
        background: rgba(12, 24, 18, 0.9) !important;
        border: 2px solid rgba(56, 224, 120, 0.35) !important;
        transition: all 0.2s ease !important;
    }
    div[data-testid="stRadio"] [role="radiogroup"] > label:hover > div:first-child {
        border-color: var(--google-green) !important;
        box-shadow: 0 0 8px rgba(56, 224, 120, 0.3) !important;
    }
    div[data-testid="stRadio"] [role="radiogroup"] > label > div:first-child > div {
        background-color: var(--google-green) !important;
    }
    div[data-testid="stRadio"] [data-baseweb="radio"] input:checked + div {
        border-color: var(--google-green) !important;
        background-color: var(--google-green) !important;
    }

    /* Streamlit Sliders - Force Green Track & Thumb */
    div[data-testid="stSlider"] div[role="slider"] {
        background-color: var(--google-green) !important;
        border: 2px solid #ffffff !important;
        box-shadow: 0 0 12px rgba(56, 224, 120, 0.6) !important;
    }
    div[data-testid="stSlider"] div[data-baseweb="slider"] div[style*="background"] {
        background: var(--google-green) !important;
    }
    div[data-testid="stSlider"] div[data-baseweb="slider"] > div:first-child {
        background: rgba(56, 224, 120, 0.2) !important;
    }

    /* Streamlit Buttons - Unified Green System */
    .stButton > button {
        border-radius: 999px !important;
        font-family: 'Outfit', sans-serif !important;
        font-weight: 700 !important;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        cursor: pointer !important;
    }
    /* Primary action buttons */
    .stButton > button[kind="primary"], .stButton > button[type="primary"] {
        background: linear-gradient(135deg, var(--google-mint) 0%, var(--google-green) 100%) !important;
        color: #050807 !important;
        border: 0 !important;
        box-shadow: 0 4px 18px rgba(56, 224, 120, 0.35) !important;
    }
    .stButton > button[kind="primary"]:hover, .stButton > button[type="primary"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 28px rgba(56, 224, 120, 0.55) !important;
        background: linear-gradient(135deg, #ffffff 0%, var(--google-mint) 100%) !important;
    }
    /* Secondary / Delete / Field Action buttons */
    .stButton > button[kind="secondary"], .stButton > button[type="secondary"], .stButton > button:not([kind="primary"]):not([type="primary"]) {
        background: rgba(16, 32, 24, 0.8) !important;
        color: var(--google-mint) !important;
        border: 1px solid rgba(56, 224, 120, 0.3) !important;
        backdrop-filter: blur(12px) !important;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25) !important;
    }
    .stButton > button[kind="secondary"]:hover, .stButton > button[type="secondary"]:hover, .stButton > button:not([kind="primary"]):not([type="primary"]):hover {
        background: rgba(24, 48, 35, 0.95) !important;
        border-color: var(--google-green) !important;
        color: #ffffff !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(56, 224, 120, 0.25) !important;
    }

    /* Alerts and Notification Boxes - Green Theme Only */
    div[data-testid="stAlert"] {
        background: rgba(10, 22, 16, 0.82) !important;
        border: 1px solid rgba(56, 224, 120, 0.3) !important;
        border-left: 5px solid var(--google-green) !important;
        border-radius: 14px !important;
        color: var(--text-primary) !important;
        backdrop-filter: blur(16px) !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
    }
    div[data-testid="stAlert"] * {
        color: var(--text-primary) !important;
    }
    div[data-testid="stAlert"] svg {
        fill: var(--google-green) !important;
    }

    /* Custom Status Strips */
    .status-strip {
        border: 1px solid rgba(56, 224, 120, 0.25);
        border-left: 5px solid var(--google-green);
        background: var(--surface-glass);
        backdrop-filter: blur(16px);
        padding: 0.9rem 1.25rem;
        border-radius: 14px;
        color: var(--text-primary);
        font-family: 'Inter', sans-serif;
        font-size: 0.92rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        margin-bottom: 1.25rem;
    }
    .status-strip strong {
        color: var(--google-mint);
        font-weight: 700;
    }

    /* Dataframe & Tables */
    [data-testid="stDataFrame"], [data-testid="stTable"] {
        border: 1px solid var(--surface-glass-border) !important;
        border-radius: 16px !important;
        overflow: hidden !important;
        background: rgba(10, 20, 15, 0.7) !important;
        box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35) !important;
    }
    .dark-data-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border: 1px solid var(--surface-glass-border);
        border-radius: 14px;
        background: rgba(10, 20, 15, 0.75);
        backdrop-filter: blur(14px);
        color: #d9ebd7;
        font-size: 0.85rem;
        font-family: 'Inter', sans-serif;
    }
    .dark-data-table th {
        padding: 0.75rem 0.9rem;
        text-align: left;
        color: var(--google-mint);
        background: rgba(18, 36, 27, 0.85);
        border-bottom: 1px solid var(--surface-glass-border);
        font-family: 'Inter', sans-serif;
        font-size: 0.76rem;
        letter-spacing: 0.06em;
        font-weight: 700;
        text-transform: uppercase;
    }
    .dark-data-table td {
        padding: 0.65rem 0.9rem;
        border-bottom: 1px solid rgba(40, 70, 52, 0.4);
    }
    .dark-data-table tr:last-child td {
        border-bottom: 0;
    }
    .dark-data-table tr:hover td {
        background: rgba(26, 50, 36, 0.75);
    }

    /* Expander styling */
    [data-testid="stExpander"] {
        background: var(--surface-glass) !important;
        backdrop-filter: blur(14px) !important;
        border: 1px solid var(--surface-glass-border) !important;
        border-radius: 16px !important;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25) !important;
    }
    [data-testid="stExpander"] summary {
        color: var(--google-mint) !important;
        font-family: 'Outfit', sans-serif !important;
        font-weight: 600 !important;
        font-size: 0.95rem !important;
    }

    .action-label {
        color: var(--google-mint);
        font: 700 0.76rem 'Inter', sans-serif;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        margin-bottom: 0.35rem;
    }
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

# Function to run the full backend pipeline
def execute_pipeline():
    py_exec = sys.executable
    steps = ["fetch_forecast.py", "run_pipeline.py", "plot_demo.py", "zip_artifacts.py"]
    results = []
    env = os.environ.copy()
    try:
        if "OPENWEATHER_API_KEY" in st.secrets:
            env["OPENWEATHER_API_KEY"] = st.secrets["OPENWEATHER_API_KEY"]
    except Exception:
        pass
    for step in steps:
        result = subprocess.run(
            [py_exec, os.path.join(BASE_DIR, "scripts", step)],
            capture_output=True,
            text=True,
            check=False,
            env=env,
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

# Main field workspace
field_ids = list(fields_dict.keys())
field_labels = {
    field_id: fields_dict[field_id]['properties'].get('name', field_id)
    for field_id in field_ids
}
field_options = ["__new_field__"] + field_ids

# Ensure active_field_id is properly initialized
if "active_field_id" not in st.session_state or st.session_state["active_field_id"] not in field_options:
    st.session_state["active_field_id"] = field_ids[0]

# Synchronize with dropdown widget if user selected another field
if "field_selector" in st.session_state and st.session_state["field_selector"] in field_options:
    if st.session_state["active_field_id"] != st.session_state["field_selector"]:
        st.session_state["active_field_id"] = st.session_state["field_selector"]

current_active_id = st.session_state["active_field_id"]
is_new_field = (current_active_id == "__new_field__")

if is_new_field:
    selected_field_id = "new_field"
    coords = st.session_state.get("pending_coords", [77.1025, 28.7041])
    location_name = st.session_state.get("pending_location_name", "New Target Location")
    selected_props = {
        "id": next_field_id,
        "name": next_field_name,
        "crop_type": "Maize",
        "soil_type": "Loam (Standard Agricultural Soil)",
        "field_capacity_mm": 150.0,
        "wilting_point_mm": 50.0,
        "initial_moisture_mm": 75.0,
        "kc": 1.0,
    }
else:
    selected_field_id = current_active_id
    selected_feature = fields_dict[current_active_id]
    selected_props = selected_feature['properties']
    coords = selected_feature['geometry']['coordinates']
    location_name = field_labels.get(current_active_id, selected_props.get("name", "Active Field"))

active_coords = [float(coords[0]), float(coords[1])]

# Top App Navigation Bar
st.markdown("""
<header class="app-navbar">
    <div class="app-brand">
        <span class="app-logo-icon">🌱</span>
        <span class="app-logo-text">Smart Irrigation AI Dashboard</span>
        <span class="app-badge">Autonomous Hydrology</span>
    </div>
    <div class="status-live-pill">
        <div class="live-dot"></div>
        <span>SATELLITE & SOIL TELEMETRY • LIVE</span>
    </div>
</header>
""", unsafe_allow_html=True)

# Prepare Globe Component Points
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
    latitude=float(active_coords[1]),
    longitude=float(active_coords[0]),
    location_name=location_name,
    active_field_id=selected_field_id,
    field_points=field_points,
    key="maplibre_google_globe",
    default=None,
)

# Handle Globe Click Event with Timestamp Verification
if isinstance(globe_value, dict) and "ts" in globe_value:
    event_ts = globe_value.get("ts")
    if event_ts != st.session_state.get("last_processed_globe_ts"):
        st.session_state["last_processed_globe_ts"] = event_ts
        clicked_fid = globe_value.get("field_id")
        
        if clicked_fid and clicked_fid in fields_dict:
            st.session_state["active_field_id"] = clicked_fid
            st.session_state["field_selector"] = clicked_fid
            st.session_state.pop("clicked_coords", None)
            st.rerun()
        elif not clicked_fid and "latitude" in globe_value and "longitude" in globe_value:
            c_lat = float(globe_value["latitude"])
            c_lon = float(globe_value["longitude"])
            st.session_state["clicked_coords"] = [c_lon, c_lat]
            st.session_state["clicked_place_name"] = reverse_geocode(c_lat, c_lon)
            st.rerun()

# If user clicked on the globe, display interactive action bar
if "clicked_coords" in st.session_state:
    clicked_c = st.session_state["clicked_coords"]
    clicked_name = st.session_state.get("clicked_place_name", "Target Location")
    
    st.markdown(f"""
    <div class="map-click-bar">
        <div>
            <strong style="color: #38e078;">📍 Pin Placed on Globe:</strong> 
            <span style="color: #eff9eb; font-weight: 600;">{clicked_name}</span> 
            <span style="color: #a3c4ad; font-family: monospace; font-size: 0.8rem;">({clicked_c[1]:.4f}° N, {clicked_c[0]:.4f}° E)</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    action_cols = st.columns([1.2, 1.2, 0.6, 2])
    with action_cols[0]:
        if st.button("➕ Create as New Field Here", type="primary", use_container_width=True):
            st.session_state["active_field_id"] = "__new_field__"
            st.session_state["pending_coords"] = clicked_c
            st.session_state["pending_location_name"] = clicked_name
            st.session_state.pop("clicked_coords", None)
            st.rerun()
    with action_cols[1]:
        if st.button(f"📍 Move '{field_labels.get(selected_field_id, selected_field_id)}' Here", use_container_width=True):
            if selected_field_id in fields_dict:
                fields_dict[selected_field_id]['geometry']['coordinates'] = clicked_c
                for feat in fields_data['features']:
                    if feat['properties'].get('id') == selected_field_id:
                        feat['geometry']['coordinates'] = clicked_c
                with open(FIELDS_FILE, 'w') as f:
                    json.dump(fields_data, f, indent=2)
                st.session_state.pop("clicked_coords", None)
                st.success(f"Updated {field_labels.get(selected_field_id)} coordinates to {clicked_c[1]:.4f}, {clicked_c[0]:.4f}")
                st.rerun()
    with action_cols[2]:
        if st.button("✖ Clear Pin", use_container_width=True):
            st.session_state.pop("clicked_coords", None)
            st.session_state.pop("clicked_place_name", None)
            st.rerun()

# Field Selector dropdown directly above field actions
field_options = ["__new_field__"] + field_ids
selected_field_id = st.selectbox(
    "📍 Active Field Selector",
    field_options,
    index=field_options.index(st.session_state["active_field_id"]) if st.session_state["active_field_id"] in field_options else 1,
    format_func=lambda x: "➕ Create new field" if x == "__new_field__" else f"📍 {field_labels[x]}",
    key="field_selector",
)
st.session_state["active_field_id"] = selected_field_id


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
    coords = st.session_state.get("pending_coords", coords)
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
    pending_output_csv = os.path.join(RESULTS_DIR, f"{new_field_id}_soilmoisture.csv")
    if os.path.exists(pending_output_csv):
        selected_field_id = new_field_id
else:
    selected_feature = fields_dict[selected_field_id]
    selected_props = selected_feature['properties']
    coords = selected_feature['geometry']['coordinates']

location_name = field_labels.get(selected_field_id, selected_props.get("name", "Active Field"))
active_coords = [float(coords[0]), float(coords[1])]

# Field Actions Bar
delete_col, delete_info_col = st.columns([1, 3])
with delete_col:
    st.markdown('<div class="action-label">Field actions</div>', unsafe_allow_html=True)
    delete_field = st.button(
        "🗑️ Delete selected field",
        type="secondary",
        disabled=is_new_field,
        use_container_width=True,
        help="Delete the selected configured field. At least one field must remain.",
    )
with delete_info_col:
    if not is_new_field:
        st.caption(f"Precision GPS Coordinates: {active_coords[1]:.5f}° Lat, {active_coords[0]:.5f}° Lon • Crop: {selected_props.get('crop_type', 'N/A')}")

if delete_field and not is_new_field:
    if len(fields_dict) <= 1:
        st.error("At least one field must remain in the network.")
        st.stop()
    fields_data["features"] = [
        feature for feature in fields_data["features"]
        if feature["properties"].get("id") != selected_field_id
    ]
    remaining_ids = [feature["properties"]["id"] for feature in fields_data["features"]]
    with open(FIELDS_FILE, "w") as f:
        json.dump(fields_data, f, indent=2)
    st.session_state["active_field_id"] = remaining_ids[0]
    st.rerun()

# Sidebar: Interactive Farm Measurements
st.sidebar.header("⚙️ Field Parameters (Live Reactive)")
st.sidebar.caption("Adjust sliders below to see the forecast graph update instantly in real-time.")

edited_kc = st.sidebar.slider(
    "Crop Coefficient (Kc Factor)",
    min_value=0.2,
    max_value=1.8,
    value=float(selected_props.get('kc', 1.0)),
    step=0.05,
    key=f"kc_{selected_field_id}",
    help="Higher Kc means crop drinks more water daily.",
)
edited_soil = st.sidebar.text_input(
    "Inferred / Soil Type",
    value=str(selected_props.get('soil_type', 'Standard Soil')),
    key=f"soil_{selected_field_id}"
)
edited_fc = st.sidebar.slider(
    "Field Capacity (FC) in mm",
    min_value=50.0,
    max_value=300.0,
    value=float(selected_props.get('field_capacity_mm', 150.0)),
    step=5.0,
    key=f"fc_{selected_field_id}",
    help="Maximum water the soil can hold before draining away.",
)
edited_wp = st.sidebar.slider(
    "Wilting Point (WP) in mm",
    min_value=10.0,
    max_value=min(edited_fc - 10.0, 150.0),
    value=float(min(selected_props.get('wilting_point_mm', 50.0), edited_fc - 10.0)),
    step=5.0,
    key=f"wp_{selected_field_id}",
    help="Drying point where plants wilt permanently.",
)
edited_initial_moisture = st.sidebar.slider(
    "Current / Initial Soil Moisture (mm)",
    min_value=float(edited_wp),
    max_value=float(edited_fc),
    value=float(max(edited_wp, min(selected_props.get('initial_moisture_mm', 75.0), edited_fc))),
    step=2.5,
    key=f"initial_moisture_{selected_field_id}",
    help="Measured or starting water depth in root zone.",
)

st.sidebar.markdown(f"""
### 📍 Field Specifications:
- **Location**: `{location_name}`  
  `Lon: {active_coords[0]:.4f}, Lat: {active_coords[1]:.4f}`
- **Crop**: `{selected_props.get('crop_type', 'N/A')}`
- **Crop Factor ($K_c$)**: `{edited_kc:.2f}`
- **Soil Texture**: `{edited_soil}`
- **Field Capacity ($FC$)**: `{edited_fc:.0f} mm`
- **Wilting Point ($WP$)**: `{edited_wp:.0f} mm`
- **Starting Moisture ($S_0$)**: `{edited_initial_moisture:.1f} mm`
""")


run_button_label = "🚀 Create Field & Fetch Weather Pipeline" if is_new_field else "🚀 Run Full Weather Pipeline"
if st.button(run_button_label, type="primary"):
    if is_new_field:
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
        st.session_state["active_field_id"] = saved_field_id

    with st.spinner("Connecting to OpenWeatherMap satellite telemetry..."):
        pipeline_results = execute_pipeline()
    failed = next((result for result in pipeline_results if result["returncode"] != 0), None)
    if failed:
        st.sidebar.error(f"Pipeline failed at {failed['step']}.")
        st.session_state["pipeline_error"] = failed["output"][-2000:]
    else:
        st.success(f"Pipeline synchronized for `{selected_field_id}`.")
    st.rerun()

metadata_file = os.path.join(RESULTS_DIR, "run_metadata.json")
active_metadata = {}
if os.path.exists(metadata_file):
    with open(metadata_file, "r") as metadata_handle:
        run_metadata = json.load(metadata_handle)
    active_metadata = next((item for item in run_metadata.get("fields", []) if item["field_id"] == selected_field_id), {})
    source = active_metadata.get("forecast_source", "Online Weather Satellite")
    st.sidebar.info(f"Forecast source: {source}\n\nSync Timestamp: {run_metadata.get('run_timestamp_utc', 'Recent')}")

# Main Monitor Section
tab1 = st.container()

with tab1:
    csv_file = os.path.join(RESULTS_DIR, f"{selected_field_id}_soilmoisture.csv")
    
    if os.path.exists(csv_file):
        df = pd.read_csv(csv_file)
        df['date'] = pd.to_datetime(df['date'])

        # REACTIVE RE-SIMULATION ON THE FLY
        # Whenever farmer moves sliders in sidebar, re-simulate immediately!
        pet_series = df['pet_mm'] if 'pet_mm' in df.columns else (0.6 * df['temp_C'])
        reactive_soil = bucket_model.simulate_bucket(
            df['date'],
            df['precip_mm'],
            pet_series,
            edited_initial_moisture,
            edited_fc,
            edited_wp,
            edited_kc,
        )
        df['soil_mm'] = reactive_soil.values

        # Generate reactive irrigation recommendations
        crop_type = selected_props.get('crop_type', 'General Crop')
        recs = recommend_irrigation(
            df,
            selected_field_id,
            selected_props.get("name", selected_field_id),
            crop_type,
            edited_fc,
        )
        metrics = calculate_water_metrics(df, recs, edited_fc)
        source_label = active_metadata.get("forecast_source", "Satellite Telemetry").title()
        latest_soil = float(df["soil_mm"].iloc[-1])
        stress_threshold = edited_fc * 0.5
        
        # Status calculation
        if latest_soil >= edited_fc * 0.75:
            traffic_state = "good"
            traffic_headline = "🟢 Soil Moisture Plentiful — PUMPS OFF"
            traffic_desc = "Your root zone has abundant water. No irrigation needed. Save pump fuel and electricity!"
        elif latest_soil >= stress_threshold:
            traffic_state = "warning"
            traffic_headline = "🟡 Moderate Moisture Band — Monitor"
            traffic_desc = "Soil water is adequate today but gradually depleting. Plan to water in 1 to 2 days."
        else:
            traffic_state = "alert"
            traffic_headline = "⚡ Crop Thirsty — IRRIGATE TODAY"
            traffic_desc = "Roots are passing below the 50% stress threshold. Apply irrigation today to maintain crop yield."

        st.markdown(
            f'<div class="status-strip"><strong>{selected_props.get("name", selected_field_id)}</strong> '
            f'&nbsp; • &nbsp; Current Soil Moisture: <strong>{latest_soil:.1f} mm</strong> '
            f'&nbsp; • &nbsp; Field Capacity: {edited_fc:.0f} mm '
            f'&nbsp; • &nbsp; Stress Point: {stress_threshold:.0f} mm '
            f'&nbsp; • &nbsp; Weather Source: {source_label}</div>',
            unsafe_allow_html=True,
        )
        
        # Top 5 KPI Metrics
        metric_cols = st.columns(5)
        metric_cols[0].metric("Recommended water", f"{metrics['recommended_water_mm']:.1f} mm")
        metric_cols[1].metric("Estimated water saved", f"{metrics['estimated_water_saved_mm']:.1f} mm")
        metric_cols[2].metric("Irrigation events", str(len(recs)))
        metric_cols[3].metric("Safe moisture days", f"{metrics['safe_moisture_days']}/{metrics['forecast_days']}")
        metric_cols[4].metric("Kc Factor", f"{edited_kc:.2f}")

        col_graph, col_farmer = st.columns([1.18, 0.82])

        with col_graph:
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
                    "Forecast window (Days)",
                    min_value=1,
                    max_value=len(df),
                    value=len(df),
                    key=f"visible_days_{selected_field_id}",
                )
            
            chart_df = df.iloc[:visible_days]
            st.subheader(f"📈 Hydro-Meteorological Response: {selected_props.get('name')}")
            
            # Matplotlib Visualisation in Emerald Google Dark Theme
            fig, ax1 = plt.subplots(figsize=(8.8, 5.0))
            fig.patch.set_facecolor('#07100b')
            ax1.set_facecolor('#0a1610')
            ax1.tick_params(colors='#c2e3c7', labelsize=9)
            for spine in ax1.spines.values():
                spine.set_color('#1e3d2c')

            ax1.set_xlabel('Date', color='#c2e3c7', fontsize=9.5, fontweight='bold')
            if chart_mode == "Temperature + PET":
                ax1.set_ylabel('Temperature (°C)', color='#a6f28f', fontsize=9.5, fontweight='bold')
                ax1.plot(chart_df['date'], chart_df['temp_C'], color='#38e078', marker='o', linewidth=2.5, label='Temperature (°C)')
                ax2 = ax1.twinx()
                ax2.set_ylabel('PET Evaporation (mm)', color='#a6f28f', fontsize=9.5, fontweight='bold')
                ax2.tick_params(colors='#c2e3c7', labelsize=9)
                ax2.plot(chart_df['date'], chart_df['pet_mm'], color='#8ee38c', marker='s', linewidth=2.0, label='PET (mm)')
            else:
                ax1.set_ylabel('Soil Moisture (mm)', color='#38e078', fontsize=9.5, fontweight='bold')
                ax1.plot(chart_df['date'], chart_df['soil_mm'], color='#38e078', marker='o', linewidth=2.5, label='Simulated Soil Moisture')
                ax1.axhline(y=edited_fc * 0.5, color='#a6f28f', linestyle=':', linewidth=2, label=f'50% FC Stress Threshold ({edited_fc*0.5:.0f}mm)')
                ax1.axhline(y=edited_fc, color='#22c55e', linestyle='--', alpha=0.6, label=f'Field Capacity ({edited_fc:.0f}mm)')
                if chart_mode == "Moisture + rain":
                    ax2 = ax1.twinx()
                    ax2.set_ylabel('Precipitation (mm)', color='#8ee38c', fontsize=9.5, fontweight='bold')
                    ax2.tick_params(colors='#c2e3c7', labelsize=9)
                    ax2.bar(chart_df['date'], chart_df['precip_mm'], color='#38e078', alpha=0.35, label='Forecast Rain (mm)')

            # Recommendation vertical lines in emerald green
            for rec in recs:
                rec_date = pd.to_datetime(rec['date'])
                if rec_date > chart_df['date'].iloc[-1]:
                    continue
                ax1.axvline(x=rec_date, color='#38e078', linestyle='--', alpha=0.9, linewidth=1.8)
                ax1.text(rec_date, chart_df['soil_mm'].min() + 2.5, f" IRRIGATE ({rec['depth_mm']:.1f}mm)", color='#38e078', rotation=90, verticalalignment='bottom', fontweight='bold', fontsize=8.5)

            handles, labels = ax1.get_legend_handles_labels()
            if 'ax2' in locals():
                extra_handles, extra_labels = ax2.get_legend_handles_labels()
                handles.extend(extra_handles)
                labels.extend(extra_labels)
            ax1.legend(handles, labels, loc='upper left', fontsize=8.5)
            legend = ax1.get_legend()
            if legend:
                legend.get_frame().set_facecolor('#0f2217')
                legend.get_frame().set_edgecolor('#284e38')
                for text in legend.get_texts():
                    text.set_color('#d8ebd7')
            fig.tight_layout()
            st.pyplot(fig)

        with col_farmer:
            # FARMER-FRIENDLY ACTION CENTER BESIDE THE GRAPH
            total_rec_water_mm = metrics['recommended_water_mm']
            liters_per_acre = total_rec_water_mm * 4047.0
            liters_per_hectare = total_rec_water_mm * 10000.0
            hours_5hp = (liters_per_acre / 30000.0) if liters_per_acre > 0 else 0.0
            
            incoming_rain_48h = df["precip_mm"].iloc[:2].sum() if len(df) >= 2 else 0.0

            st.markdown(f"""
            <div class="farmer-panel">
                <div class="farmer-panel-title">
                    <span>🚜 Farmer's Irrigation Action Center</span>
                </div>
                <div class="status-traffic {traffic_state}">
                    <div>
                        <div style="font-weight: 800; font-size: 1rem;">{traffic_headline}</div>
                        <div style="font-size: 0.8rem; margin-top: 2px; opacity: 0.9;">{traffic_desc}</div>
                    </div>
                </div>
                <div class="farmer-stats-grid">
                    <div class="farmer-stat-box">
                        <div class="farmer-stat-label">Water Needed / Acre</div>
                        <div class="farmer-stat-val">{liters_per_acre:,.0f} L</div>
                        <div style="font-size: 0.72rem; color: #a3c4ad;">approx {liters_per_acre/1000:.1f} kL / acre</div>
                    </div>
                    <div class="farmer-stat-box">
                        <div class="farmer-stat-label">Pump Runtime (5 HP)</div>
                        <div class="farmer-stat-val">{"~" + f"{hours_5hp:.1f} hrs" if hours_5hp > 0 else "0 hrs (Standby)"}</div>
                        <div style="font-size: 0.72rem; color: #a3c4ad;">per acre tube-well</div>
                    </div>
                    <div class="farmer-stat-box">
                        <div class="farmer-stat-label">Water Needed / Hectare</div>
                        <div class="farmer-stat-val">{liters_per_hectare:,.0f} L</div>
                        <div style="font-size: 0.72rem; color: #a3c4ad;">({total_rec_water_mm:.1f} mm total)</div>
                    </div>
                    <div class="farmer-stat-box">
                        <div class="farmer-stat-label">Next 48h Rain Forecast</div>
                        <div class="farmer-stat-val">{incoming_rain_48h:.1f} mm</div>
                        <div style="font-size: 0.72rem; color: #a3c4ad;">{"🌧️ Rain coming" if incoming_rain_48h >= 5.0 else "☀️ Clear skies"}</div>
                    </div>
                </div>
                <div class="farmer-tip-box">
                    <strong>🌾 Agronomist Tip for {crop_type}:</strong><br>
                    Keep root zone above {edited_fc*0.5:.0f} mm to protect flower and grain development. 
                    {"Rain is incoming over next 48h! Hold irrigation valves to let nature water your field." if incoming_rain_48h >= 5.0 else "Dry weather ahead. Run standard watering schedule."}
                </div>
            </div>
            """, unsafe_allow_html=True)

            st.subheader("💧 AI Schedule Triggers")
            if recs:
                for r in recs:
                    st.warning(f"🌿 **Date:** `{r['date']}` | **Water Depth:** `{r['depth_mm']} mm` (~{r['depth_mm']*4047:,.0f} L/acre)  \n*{r['reason']}*")
            else:
                st.success("✅ **Optimal Moisture:** Soil water remains within safe band. Zero irrigation required across the 7-day cycle.")

        st.subheader("📋 7-Day Atmospheric & Soil Data")
        dark_table = df.copy()
        dark_table["date"] = dark_table["date"].dt.strftime("%d %b")
        for column in ["precip_mm", "pet_mm", "soil_mm"]:
            dark_table[column] = dark_table[column].map(lambda value: f"{value:.2f}")
        dark_table["temp_C"] = dark_table["temp_C"].map(lambda value: f"{value:.1f}")
        st.markdown(
            dark_table.to_html(index=False, classes="dark-data-table", border=0),
            unsafe_allow_html=True,
        )

        st.subheader("⚠️ Weather & Crop Risk Telemetry")
        for risk in weather_risks(df, edited_fc, edited_wp):
            if "No major" in risk:
                st.success(f"🌱 {risk}")
            else:
                st.warning(f"⚡ {risk}")

        with st.expander("🧪 What-if Scenario Simulation"):
            scenario = st.selectbox(
                "Scenario Mode",
                ["Normal forecast", "Hot and dry", "Heavy rainfall", "Custom Kc"],
                key=f"scenario_{selected_field_id}",
            )
            scenario_kc = st.number_input(
                "Scenario Kc Factor",
                min_value=0.0,
                value=float(edited_kc),
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
                edited_initial_moisture,
                edited_fc,
                edited_wp,
                scenario_kc,
            )
            scenario_df["scenario_soil_mm"] = scenario_soil.values
            comparison = pd.DataFrame({
                "date": scenario_df["date"].dt.strftime("%Y-%m-%d"),
                "normal_soil_mm": df["soil_mm"].round(1),
                "scenario_soil_mm": scenario_df["scenario_soil_mm"].round(1),
            })
            st.line_chart(comparison.set_index("date"), color=["#38e078", "#a6f28f"])

        with st.expander("📡 IoT Ground Sensor Integration"):
            st.caption("Upload a calibrated IoT ground sensor CSV (columns: date, soil_mm) to compare empirical telemetry with AI physics modeling.")
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
                    st.line_chart(sensor_compare.set_index("date"), color=["#38e078", "#8ee38c"])
                    st.dataframe(sensor_compare, use_container_width=True)

    else:
        st.info("No forecast output for this field yet. Click **Run Full Weather Pipeline** to fetch atmospheric telemetry and generate the model.")

    st.markdown("---")
    st.subheader(f"📅 7-Day Precision Irrigation Schedule: {location_name}")
    sched_file = os.path.join(RESULTS_DIR, "irrigation_schedule.csv")
    if os.path.exists(sched_file):
        sched_df = pd.read_csv(sched_file)
        if "field_id" in sched_df.columns:
            selected_sched_df = sched_df[sched_df["field_id"] == selected_field_id]
        else:
            selected_sched_df = pd.DataFrame()

        if selected_sched_df.empty:
            st.success("No irrigation events required for this field across the 7-day forecast cycle.")
        else:
            st.dataframe(selected_sched_df, use_container_width=True)
    else:
        st.warning("Schedule file not found. Please trigger the pipeline.")
