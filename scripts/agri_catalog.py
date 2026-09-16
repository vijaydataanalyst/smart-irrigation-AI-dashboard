import requests
import json
import os

# FAO-56 Standard Crop Database
FAO_CROPS = {
    "Tomato": {
        "kc": 1.15,
        "root_depth_m": 0.7,
        "depletion_p": 0.40,
        "stage": "Mid-season (Fruiting)",
        "description": "Moderately sensitive to water stress; requires consistent root-zone moisture."
    },
    "Maize": {
        "kc": 1.00,
        "root_depth_m": 1.0,
        "depletion_p": 0.50,
        "stage": "Vegetative / Tasseling",
        "description": "Moderate water demand; high sensitivity during flowering."
    },
    "Wheat": {
        "kc": 0.85,
        "root_depth_m": 0.9,
        "depletion_p": 0.55,
        "stage": "Tillering / Stem Extension",
        "description": "Cool season cereal; moderate drought tolerance."
    },
    "Rice (Paddy)": {
        "kc": 1.25,
        "root_depth_m": 0.5,
        "depletion_p": 0.20,
        "stage": "Panicle Initiation",
        "description": "High water demand; sensitive to even mild soil drying."
    },
    "Cotton": {
        "kc": 1.10,
        "root_depth_m": 1.2,
        "depletion_p": 0.65,
        "stage": "Boll Formation",
        "description": "Deep rooted; drought tolerant but needs water during boll development."
    },
    "Sugarcane": {
        "kc": 1.25,
        "root_depth_m": 1.2,
        "depletion_p": 0.50,
        "stage": "Grand Growth",
        "description": "High total water requirement with long growing season."
    },
    "Potato": {
        "kc": 1.15,
        "root_depth_m": 0.6,
        "depletion_p": 0.35,
        "stage": "Tuber Bulking",
        "description": "Shallow rooted; requires frequent, light irrigation."
    },
    "Onion": {
        "kc": 1.05,
        "root_depth_m": 0.4,
        "depletion_p": 0.30,
        "stage": "Bulb Enlargement",
        "description": "Very shallow root system; high vulnerability to moisture stress."
    },
    "Soybean": {
        "kc": 0.95,
        "root_depth_m": 0.8,
        "depletion_p": 0.50,
        "stage": "Pod Development",
        "description": "Legume crop with moderate water use efficiency."
    }
}

for crop_info in FAO_CROPS.values():
    base_kc = crop_info["kc"]
    crop_info["stage_kc"] = {
        "Initial": round(base_kc * 0.65, 2),
        "Development": round(base_kc * 0.85, 2),
        "Mid-season": round(base_kc, 2),
        "Late-season": round(base_kc * 0.75, 2),
    }

# Soil Hydraulic Properties based on USDA / Saxton-Rawls Pedotransfer Functions
SOIL_PROFILES = {
    "Loam (Standard Agricultural Soil)": {
        "soil_type": "Loam",
        "field_capacity_mm": 150.0,
        "wilting_point_mm": 50.0,
        "description": "Balanced moisture retention and drainage. Ideal for most vegetables and cereals."
    },
    "Sandy Loam (Fast Draining)": {
        "soil_type": "Sandy Loam",
        "field_capacity_mm": 120.0,
        "wilting_point_mm": 40.0,
        "description": "Drains rapidly; requires more frequent, smaller irrigation events."
    },
    "Clay Loam (High Retention)": {
        "soil_type": "Clay Loam",
        "field_capacity_mm": 180.0,
        "wilting_point_mm": 65.0,
        "description": "Holds substantial water; slower infiltration."
    },
    "Black Cotton Soil (Vertisol - Deep Clay)": {
        "soil_type": "Black Cotton Soil",
        "field_capacity_mm": 210.0,
        "wilting_point_mm": 85.0,
        "description": "Very high clay content; swells when wet, cracks when dry. Common in Deccan plateau."
    },
    "Red Sandy Soil (Alfisol)": {
        "soil_type": "Red Sandy Soil",
        "field_capacity_mm": 110.0,
        "wilting_point_mm": 35.0,
        "description": "Low water retention; common in southern and eastern India."
    }
}

# Preset Agricultural Locations for Quick Demo
PRESET_LOCATIONS = {
    "Delhi NCR (North India)": [77.1025, 28.7041],
    "Mumbai / Konkan Coast": [72.8777, 19.0760],
    "Bengaluru / Karnataka Plateau": [77.5946, 12.9716],
    "Punjab (Ludhiana - Grain Bowl)": [75.8573, 30.9010],
    "Maharashtra (Nashik - Horticultural Hub)": [73.7898, 19.9975],
    "Andhra Pradesh (Guntur - Cotton/Chilli)": [80.4365, 16.3067],
    "Tamil Nadu (Coimbatore - Agricultural Zone)": [76.9558, 11.0168],
    "Custom Coordinates": [0.0, 0.0]
}

def detect_soil_from_api(lat, lon):
    """
    Queries ISRIC SoilGrids REST API to determine real soil properties.
    Falls back smoothly if offline or slow.
    """
    url = f"https://rest.isric.org/soilgrids/v2.0/properties/query?lat={lat}&lon={lon}&property=clay&property=sand&depth=15-30cm&value=mean"
    try:
        resp = requests.get(url, timeout=4)
        if resp.status_code == 200:
            data = resp.json()
            layers = data.get("properties", {}).get("layers", [])
            clay_val, sand_val = 250, 400
            for layer in layers:
                name = layer.get("name")
                depths = layer.get("depths", [])
                if depths:
                    val = depths[0].get("values", {}).get("mean", 0)
                    if name == "clay":
                        clay_val = val
                    elif name == "sand":
                        sand_val = val

            clay_pct = clay_val / 10.0
            sand_pct = sand_val / 10.0

            if clay_pct > 35:
                return "Clay Loam (High Retention)", 180.0, 65.0
            elif sand_pct > 50:
                return "Sandy Loam (Fast Draining)", 120.0, 40.0
            else:
                return "Loam (Standard Agricultural Soil)", 150.0, 50.0
    except Exception:
        pass

    # Sensible default
    return "Loam (Standard Agricultural Soil)", 150.0, 50.0
