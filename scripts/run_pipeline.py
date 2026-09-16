import os
import json
import pandas as pd
import numpy as np

import bucket_model
from irrigation_engine import recommend_irrigation

def main():
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DATA_DIR = os.path.join(BASE_DIR, 'data')
    RESULTS_DIR = os.path.join(BASE_DIR, 'results')
    FIELDS_FILE = os.path.join(DATA_DIR, 'fields.geojson')

    TARGET_REFILL_FRACTION = 0.8
    IRRIGATION_MAX_PER_EVENT_MM = 30.0
    RAIN_THRESHOLD_MM = 5.0

    with open(FIELDS_FILE, 'r') as f:
        fields_data = json.load(f)

    all_recommendations = []
    notes = []

    for feature in fields_data['features']:
        props = feature['properties']
        field_id = props['id']
        crop_name = props.get('crop_type', 'Default Crop')
        soil_type = props.get('soil_type', 'Standard Soil')
        field_capacity_mm = float(props.get('field_capacity_mm', 150.0))
        wilting_point_mm = float(props.get('wilting_point_mm', 50.0))
        if field_capacity_mm <= 0 or wilting_point_mm < 0 or wilting_point_mm >= field_capacity_mm:
            notes.append(f"Invalid soil bounds for {field_id}; field skipped.")
            continue
        s0_mm = props.get('initial_moisture_mm', 0.5 * field_capacity_mm)
        kc = props.get('kc', 1.0)

        forecast_file = os.path.join(DATA_DIR, f'forecast_{field_id}.json')

        try:
            with open(forecast_file, 'r') as f:
                forecast_data = json.load(f)
        except Exception:
            forecast_data = []
            notes.append(f"Missing forecast for {field_id}.")

        if not forecast_data:
            notes.append(f"No forecast data available for {field_id}; field skipped.")
            continue

        # Check if fallback used
        if forecast_data and forecast_data[0].get("synthesized", False):
            notes.append(f"Synthesized forecast used for {field_id}.")

        df = pd.DataFrame(forecast_data)
        df['date'] = pd.to_datetime(df['date'])
        dates = df['date']
        precip_mm = df['precip_mm']
        temp_C = df['temp_C']

        # Simple PET proxy: 0.6 * Temp_C
        pet_mm = 0.6 * temp_C

        # Simulate soil moisture using field-specific parameters
        soil_mm = bucket_model.simulate_bucket(
            dates=dates,
            precip_mm=precip_mm,
            pet_mm=pet_mm,
            S0_mm=s0_mm,
            field_capacity_mm=field_capacity_mm,
            wilting_point_mm=wilting_point_mm,
            Kc=kc
        )

        df['pet_mm'] = pet_mm
        df['soil_mm'] = soil_mm.values

        field_recs = recommend_irrigation(
            df,
            field_id,
            props.get('name', field_id),
            crop_name,
            field_capacity_mm,
            rain_threshold_mm=RAIN_THRESHOLD_MM,
            target_refill_fraction=TARGET_REFILL_FRACTION,
            irrigation_max_per_event_mm=IRRIGATION_MAX_PER_EVENT_MM,
        )
        all_recommendations.extend(field_recs)

        # Saves
        out_csv = os.path.join(RESULTS_DIR, f"{field_id}_soilmoisture.csv")
        df[['date', 'temp_C', 'precip_mm', 'pet_mm', 'soil_mm']].to_csv(out_csv, index=False)

        out_json = os.path.join(RESULTS_DIR, f"{field_id}_recs.json")
        with open(out_json, "w") as f:
            json.dump(field_recs, f, indent=2)

    sched_df = pd.DataFrame(all_recommendations)
    sched_out = os.path.join(RESULTS_DIR, "irrigation_schedule.csv")
    sched_df.to_csv(sched_out, index=False)

    notes_file = os.path.join(RESULTS_DIR, "run_notes.json")
    with open(notes_file, "w") as f:
        unique_notes = list(set(notes))
        json.dump(unique_notes, f)

    audit_file = os.path.join(RESULTS_DIR, "run_metadata.json")
    audit_fields = []
    for feature in fields_data['features']:
        props = feature['properties']
        field_id = props['id']
        forecast_file = os.path.join(DATA_DIR, f"forecast_{field_id}.json")
        forecast = []
        if os.path.exists(forecast_file):
            with open(forecast_file, 'r') as forecast_handle:
                forecast = json.load(forecast_handle)
        audit_fields.append({
            "field_id": field_id,
            "field_name": props.get("name", field_id),
            "crop": props.get("crop_type", "Unknown"),
            "crop_stage": props.get("crop_stage", "Configured"),
            "kc": props.get("kc", 1.0),
            "soil_type": props.get("soil_type", "Standard Soil"),
            "field_capacity_mm": props.get("field_capacity_mm", 150.0),
            "wilting_point_mm": props.get("wilting_point_mm", 50.0),
            "forecast_days": len(forecast),
            "forecast_source": "synthetic fallback" if forecast and forecast[0].get("synthesized") else "OpenWeather API",
        })
    with open(audit_file, "w") as f:
        json.dump({"run_timestamp_utc": pd.Timestamp.utcnow().isoformat(), "fields": audit_fields}, f, indent=2)

    print("Pipeline execution complete for all fields.")

if __name__ == '__main__':
    main()
