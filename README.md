# Smart Irrigation Scheduling

A field-level irrigation decision-support prototype that combines forecast weather, crop water demand, soil hydraulic limits, and explainable irrigation recommendations.

## What It Does

- Fetches per-field temperature and precipitation forecasts from OpenWeatherMap.
- Falls back to deterministic synthetic forecasts when the API is unavailable.
- Infers a soil profile from SoilGrids for new fields.
- Simulates root-zone moisture with a bounded bucket model.
- Applies crop coefficient (`Kc`), field capacity (`FC`), wilting point (`WP`), and initial moisture.
- Produces date, depth, and reason for each irrigation recommendation.
- Shows only the selected field's schedule in the dashboard.
- Supports what-if scenarios, water-saving metrics, crop growth stages, weather-risk alerts, field mapping, and optional sensor CSV comparison.
- Records forecast source, run time, field parameters, and forecast freshness in `results/run_metadata.json`.

## Architecture

```text
Streamlit app
    -> fetch_forecast.py -> data/forecast_<field>.json
    -> run_pipeline.py -> bucket_model.py + irrigation_engine.py
                         -> results/<field>_soilmoisture.csv
                         -> results/<field>_recs.json
                         -> results/irrigation_schedule.csv
                         -> results/run_metadata.json
```

`data/fields.geojson` is the source of field coordinates and agronomic configuration. `scripts/agri_catalog.py` contains FAO crop and soil presets. `scripts/irrigation_engine.py` contains reusable recommendation, metric, and risk logic.

## Installation

Use Python 3.10 or newer.

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Weather API Setup

The application does not contain an API key. Set the key in the terminal before launching:

```powershell
$env:OPENWEATHER_API_KEY="your-openweathermap-key"
```

When no key is configured, the app uses the built-in synthetic fallback and labels the run as `synthetic fallback`.

## Run the Dashboard

```powershell
streamlit run app.py
```

Select a field, edit `Kc`, soil type, `FC`, `WP`, or initial moisture, then click **Apply Parameters, Fetch Weather & Plot**. The forecast, graph, recommendations, metrics, risks, and selected-field schedule refresh together.

## Run the Pipeline Manually

```powershell
python scripts/fetch_forecast.py
python scripts/run_pipeline.py
python scripts/plot_demo.py
python scripts/zip_artifacts.py
```

## Inputs and Outputs

- `data/fields.geojson`: field coordinates and agronomic parameters.
- `data/forecast_<field_id>.json`: daily temperature and precipitation forecast.
- `results/<field_id>_soilmoisture.csv`: temperature, precipitation, PET, and simulated soil moisture.
- `results/<field_id>_recs.json`: explainable field recommendations.
- `results/irrigation_schedule.csv`: all generated recommendations, filtered by the UI to the active field.
- `results/run_metadata.json`: UTC run timestamp, forecast source, parameters, and forecast-day count.
- `results/run_notes.json`: fallback and validation notes.

## Novel Dashboard Features

- What-if scenarios: normal, hot and dry, heavy rainfall, and custom `Kc`.
- Water-saving estimate and safe-moisture-day metrics.
- Heat, dry-spell, runoff, and wilting-point alerts.
- Live versus fallback forecast-source indicator.
- Map of configured fields and latest simulated moisture.
- Optional sensor CSV upload with `date` and `soil_mm` columns.
- Crop growth-stage `Kc` defaults for initial, development, mid-season, and late-season stages.

## Domain Rules and Boundaries

- Soil moisture is capped at FC and floored at WP.
- WP must be lower than FC.
- Recommendations require available water fraction below 0.5 and less than 5 mm forecast rain over the next 48 hours.
- Irrigation is capped at 30 mm per event.
- Missing or unavailable weather uses an explicit synthetic fallback and is recorded in metadata.

## Tests

```powershell
pytest -q
```

Tests cover bucket bounds, rain suppression, explainable recommendations, and metric calculations.

## Demo Talking Points

1. Select a field and show its live or fallback source status.
2. Change `Kc`, `FC`, or `WP` and rerun the pipeline.
3. Explain the graph as rainfall input minus crop demand, bounded by soil limits.
4. Open the recommendation reason and water-saving metrics.
5. Demonstrate a hot-and-dry what-if scenario and discuss the risk alert.
