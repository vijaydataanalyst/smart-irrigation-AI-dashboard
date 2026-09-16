# Smart Irrigation AI Dashboard 🌱

An intelligent, field-level irrigation decision-support platform combining 3D planetary Earth observation, real-time satellite weather forecasting, 1-D soil root-zone physics modeling, and actionable agronomic recommendations for farmers.

---

## 🌟 What the Dashboard Does

- **3D Planet Earth Observation**: An interactive 3D WebGL globe with high-resolution dark terrain mapping (watermark-free Esri Dark Gray Base + Reference) to select, orbit, and inspect field locations worldwide.
- **Precision Spherical Pinning & Target Beacon**: Pinned field locations remain anchored to physical Earth coordinates with spherical horizon occlusion (pins on the opposite side of Earth naturally hide as the planet rotates) and pulsing radar beacons.
- **Live Satellite Telemetry**: Fetches 5-day / 3-hour meteorological forecasts from OpenWeatherMap (temperature, rainfall, humidity) with localized fallback simulation when offline.
- **Live Reactive Physics Simulation**: Root-zone moisture is simulated using a 1-D bucket model. When sliders for Crop Thirst ($K_c$), Field Capacity ($FC$), Wilting Point ($WP$), or Initial Moisture are adjusted in the sidebar, the hydro-meteorological graph and water metrics **update instantly in real time**.
- **Farmer's Irrigation Action Center**: Translates complex agronomic science into clear, farmer-friendly terms:
  - **Traffic Light Status**: 🟢 *Pumps OFF (Moisture Plentiful)* vs 🟡 *Moderate (Monitor)* vs ⚡ *Crop Thirsty (Irrigate Today)*.
  - **Water Needed in Farmer Units**: Direct conversions to **Liters per Acre** and **Liters per Hectare** (e.g. `60,000 L/acre`).
  - **Pump Operating Runtime**: Estimates exact hours to run a standard **5 HP agricultural pump** (e.g. `~2.5 hours`).
  - **Rain Forecast Advisory**: Warns farmers if rain is expected in the next 48 hours to prevent wasted electricity and water.
  - **Crop Agronomy Tips**: Tailored growth stage advice for Tomato, Maize, Wheat, Sugarcane, Cotton, and more.
- **Unified Emerald Green Theme**: Built with a sleek Google/Antigravity-inspired dark void aesthetic, glassmorphic cards, and zero red styling.

---

## 📈 Understanding the Forecast & Soil Moisture Graph

Here is what every line and bar on the forecast chart represents:

1. 🟢 **Bright Green Line with Dots (Simulated Soil Moisture)**:
   - Shows the actual root-zone water depth in millimeters ($mm$) present in the soil on each day.
   - As days pass, the line trends downward as the crop drinks water and solar radiation causes evaporation (Evapotranspiration).
   - When it rains, the line jumps upward.
2. 🌿 **Green Dashed Line (Field Capacity - $FC$)**:
   - The maximum water holding capacity of the soil against gravity. Any water exceeding this level drains away as runoff or deep percolation.
3. 🟡 **Dotted Line (50% FC Stress Threshold)**:
   - The critical danger threshold.
   - In agronomy, if soil moisture drops below 50% of Field Capacity, crops experience water stress, stunting root development and slashing harvest yields.
4. 🟦 **Cyan / Mint Bars (Precipitation / Rain)**:
   - Expected rainfall (in $mm$) predicted by the satellite weather forecast for each specific day.
5. ⚡ **Vertical Green Line with "IRRIGATE" Tag**:
   - The model's smart autonomous decision.
   - When soil moisture is projected to drop below the 50% stress threshold **and** no significant rain ($\ge 5\text{ mm}$) is forecast over the next 48 hours, the system triggers an irrigation event and specifies the exact depth (e.g., $30.0\text{ mm}$) required to safely refill the root zone.

---

## 📋 The 7-Day Forecast & Soil Simulation Table

This table presents the daily hydrological balance behind the chart:

| Column Name | What It Means | Where It Comes From |
| :--- | :--- | :--- |
| **`date`** | The day of the forecast cycle (7-day window). | Calendar / API timestamp |
| **`precip_mm`** | Expected rainfall in millimeters ($mm$) on that day. | OpenWeatherMap Satellite API / Forecast |
| **`temp_C`** | Mean daily air temperature in degrees Celsius ($^\circ\text{C}$). | OpenWeatherMap Satellite API / Forecast |
| **`pet_mm`** | Potential Evapotranspiration: Water evaporating into the atmosphere ($0.6 \times \text{Temp}^\circ\text{C}$). | Calculated from temperature telemetry |
| **`soil_mm`** | Resulting Soil Water: Exact root-zone moisture remaining at the end of the day. | Calculated by 1-D Bucket Model |

### The Daily Hydrological Equation
$$\text{Today's Soil Water} = \text{Yesterday's Water} + \text{Rainfall} - (\text{Crop Factor } K_c \times \text{Evaporation})$$

---

## 🌾 Field Profile & Agronomic Parameters

Each field can be tailored to its specific microclimate and soil profile:
- **Crop Type**: Different plants consume water at different rates depending on their growth stage.
- **Crop Coefficient ($K_c$)**: A multiplier reflecting crop water demand:
  - *Tomato*: $K_c \approx 1.15$ (high water demand during fruiting)
  - *Maize*: $K_c \approx 1.00 - 1.25$ (critical demand during tasseling/silking)
  - *Wheat*: $K_c \approx 0.85$ (moderate water consumption)
- **Soil Type & Texture**:
  - *Sandy Soil*: Drains rapidly (lower Field Capacity).
  - *Clay Soil*: Retains water for long periods (higher Field Capacity).
  - *Loam*: Balanced agricultural soil.
- **Initial Moisture ($S_0$)**: The starting water level in the root zone.

---

## 🛰️ How the Weather API & Forecast Files Work

### 1. The Starting File: `data/fields.geojson`
Contains the geographical coordinates, crop type, and soil hydraulic limits for all configured fields:
```json
{
  "id": "field_1",
  "name": "Field 1 (North Block - Tomato)",
  "crop_type": "Tomato",
  "coordinates": [77.1025, 28.7041]
}
```

### 2. Live Weather Ingestion: `scripts/fetch_forecast.py`
1. Reads GPS coordinates from `data/fields.geojson`.
2. Sends an HTTP request to OpenWeatherMap:
   ```http
   GET https://api.openweathermap.org/data/2.5/forecast?lat=28.7041&lon=77.1025&units=metric&appid=YOUR_API_KEY
   ```
3. Generates or refreshes `data/forecast_<field_id>.json`:
   ```json
   [
     {
       "date": "2026-09-16",
       "precip_mm": 0.0,
       "temp_C": 29.5,
       "synthesized": false
     }
   ]
   ```
   *(Note: `"synthesized": false` confirms live data pulled directly from the satellite API. When offline or without a key, it gracefully uses deterministic microclimate synthesis with `"synthesized": true`.)*

---

## 🏛️ System Architecture

```text
Streamlit Dashboard (app.py)
    │
    ├── 3D Globe Component (MapLibre GL JS + Esri Dark Canvas)
    │     └── Native WebGL GeoJSON layers (spherical occlusion, pulsing beacons)
    │
    ├── scripts/fetch_forecast.py -> data/forecast_<field_id>.json
    │     └── OpenWeatherMap API / Synthetic fallback
    │
    ├── scripts/bucket_model.py
    │     └── Simulates daily soil moisture retention
    │
    ├── scripts/irrigation_engine.py
    │     ├── recommend_irrigation() -> results/<field_id>_recs.json
    │     ├── calculate_water_metrics() -> water saved & safe days
    │     └── weather_risks() -> heat, dry-spell, and wilting alerts
    │
    └── Output Datasets & Schedules:
          ├── results/<field_id>_soilmoisture.csv
          ├── results/irrigation_schedule.csv
          └── results/run_metadata.json
```

---

## 🚀 Quickstart Guide

### Prerequisites
- Python 3.10+
- Node.js 18+ (for building the 3D globe component)

### 1. Clone & Setup Python Environment
```powershell
git clone https://github.com/vijaydataanalyst/smart-irrigation-AI-dashboard.git
cd smart-irrigation-AI-dashboard

python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 2. (Optional) Configure OpenWeatherMap API Key
If you have an OpenWeatherMap API key, set it in your environment:
```powershell
$env:OPENWEATHER_API_KEY="your-openweathermap-api-key"
```
*(If omitted, the platform automatically utilizes realistic localized microclimate synthesis so all features remain 100% operational).*

### 3. Build the 3D Globe Frontend
```powershell
cd globe_component
npm install
npm run build
cd ..
```

### 4. Run the Dashboard
```powershell
streamlit run app.py
```
Open your browser at `http://localhost:8501`.

---

## 💡 Executive Summary for Judges & Agronomists

> *"The Smart Irrigation AI Dashboard connects live satellite weather intelligence with root-zone physical modeling. By accounting for crop thirst ($K_c$), soil water limits ($FC$, $WP$), and upcoming rain forecasts, the system eliminates guesswork for farmers. It tells them in plain language exactly when to irrigate, precisely how many liters of water to apply per acre, how many hours to run their pump, and when to keep pumps off because rain is on the way."*
