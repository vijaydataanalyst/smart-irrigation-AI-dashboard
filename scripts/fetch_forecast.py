import os
import json
import requests
import datetime
import urllib3
import hashlib

# Suppress insecure HTTPS warnings if certificate verification is disabled
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Setup paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
FIELDS_FILE = os.path.join(DATA_DIR, 'fields.geojson')

# OpenWeatherMap API Key - checks environment variables and Streamlit secrets
API_KEY = os.environ.get('OPENWEATHER_API_KEY')
if not API_KEY:
    try:
        import streamlit as st
        API_KEY = st.secrets.get("OPENWEATHER_API_KEY")
    except Exception:
        API_KEY = None

def get_synthesized_forecast(field_id="field_1"):
    """Generates realistic field-specific synthesized 7-day forecast with micro-climate variation."""
    forecast = []
    base_date = datetime.datetime.now().date()

    # Field-specific weather patterns (slight localized variations)
    weather_profiles = {
        "field_1": {
            "temps": [29.5, 30.2, 28.0, 27.5, 31.0, 30.5, 29.0],
            "precips": [0.0, 0.0, 2.5, 0.0, 0.0, 0.0, 0.0]
        },
        "field_2": {
            "temps": [31.0, 31.8, 30.5, 29.0, 32.2, 31.5, 30.8],
            "precips": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
        },
        "field_3": {
            "temps": [28.2, 28.8, 27.0, 26.5, 29.5, 29.0, 28.0],
            "precips": [0.0, 1.0, 6.5, 0.5, 0.0, 0.0, 0.0]
        }
    }

    profile = weather_profiles.get(field_id)
    if profile is None:
        # Give every newly created field a stable, distinct micro-climate instead
        # of silently reusing field_1's forecast.
        seed = int(hashlib.sha256(field_id.encode("utf-8")).hexdigest()[:8], 16)
        base_temp = 26.0 + (seed % 70) / 10.0
        profile = {
            "temps": [round(base_temp + ((seed >> (i * 3)) % 13 - 6) / 10.0, 1) for i in range(7)],
            "precips": [
                round(((seed >> (i * 4)) % 31) / 10.0, 1) if i % 3 else round(((seed >> (i * 4)) % 81) / 10.0, 1)
                for i in range(7)
            ],
        }

    for i in range(7):
        date = base_date + datetime.timedelta(days=i)
        forecast.append({
            "date": date.strftime('%Y-%m-%d'),
            "precip_mm": profile["precips"][i],
            "temp_C": profile["temps"][i],
            "synthesized": True
        })
    return forecast

def fetch_forecast_for_field(lon, lat, field_id, api_key):
    """
    Fetches forecast from OpenWeatherMap.
    Tries 5-day free forecast first, then falls back gracefully.
    """
    if not api_key or api_key in ["YOUR_OPENWEATHER_KEY", ""]:
        return get_synthesized_forecast(field_id)

    # Try standard Free Tier 5-day / 3-hour forecast endpoint
    url_5day = f"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&appid={api_key}"
    try:
        response = requests.get(url_5day, timeout=10, verify=False)
        if response.status_code == 200:
            data = response.json()
            daily_dict = {}
            for item in data.get('list', []):
                dt_txt = item.get('dt_txt', '').split(' ')[0]
                temp = item.get('main', {}).get('temp', 28.0)
                rain = item.get('rain', {}).get('3h', 0.0)
                if dt_txt not in daily_dict:
                    daily_dict[dt_txt] = {'temps': [], 'precip': 0.0}
                daily_dict[dt_txt]['temps'].append(temp)
                daily_dict[dt_txt]['precip'] += rain

            forecast = []
            for dt_str, vals in list(daily_dict.items())[:7]:
                forecast.append({
                    "date": dt_str,
                    "precip_mm": round(vals['precip'], 2),
                    "temp_C": round(sum(vals['temps']) / len(vals['temps']), 1),
                    "synthesized": False
                })
            if len(forecast) >= 3:
                print(f"-> Successfully fetched LIVE weather data for {field_id}")
                return forecast
    except Exception as e:
        print(f"Error fetching forecast for {field_id}: {e}")

    print(f"-> Using synthesized forecast for {field_id}")
    return get_synthesized_forecast(field_id)

def main():
    try:
        with open(FIELDS_FILE, 'r') as f:
            fields_data = json.load(f)
    except Exception as e:
        print("Could not read fields_file", e)
        return

    for feature in fields_data['features']:
        field_id = feature['properties']['id']
        lon, lat = feature['geometry']['coordinates']

        forecast = fetch_forecast_for_field(lon, lat, field_id, API_KEY)
        out_file = os.path.join(DATA_DIR, f'forecast_{field_id}.json')
        with open(out_file, 'w') as out_f:
            json.dump(forecast, out_f, indent=2)
        print(f"Saved forecast for {field_id}")

if __name__ == '__main__':
    main()
