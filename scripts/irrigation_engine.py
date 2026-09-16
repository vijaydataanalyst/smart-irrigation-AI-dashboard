import pandas as pd


def recommend_irrigation(
    df,
    field_id,
    field_name,
    crop_name,
    field_capacity_mm,
    rain_threshold_mm=5.0,
    target_refill_fraction=0.8,
    irrigation_max_per_event_mm=30.0,
):
    """Generate explainable recommendations from simulated soil and forecast rain."""
    recommendations = []
    irrigation_credit = 0.0
    previous_raw_soil = None
    for index in range(len(df)):
        current_date = df["date"].iloc[index]
        raw_soil = float(df["soil_mm"].iloc[index])
        if previous_raw_soil is not None:
            natural_depletion = max(0.0, previous_raw_soil - raw_soil)
            irrigation_credit = max(0.0, irrigation_credit * 0.85 - natural_depletion)
        current_soil = min(field_capacity_mm, raw_soil + irrigation_credit)
        available_water_fraction = current_soil / field_capacity_mm
        rain_next_48h = (
            df["precip_mm"].iloc[index:index + 2].sum()
            if index < len(df) - 1
            else df["precip_mm"].iloc[index]
        )

        if available_water_fraction < 0.5 and rain_next_48h < rain_threshold_mm:
            refill_amount = field_capacity_mm * target_refill_fraction - current_soil
            depth_mm = min(irrigation_max_per_event_mm, max(0, refill_amount))
            if depth_mm > 0:
                recommendations.append({
                    "field_id": field_id,
                    "field_name": field_name,
                    "crop": crop_name,
                    "date": current_date.strftime("%Y-%m-%d"),
                    "depth_mm": round(float(depth_mm), 1),
                    "soil_moisture_mm": round(current_soil, 1),
                    "reason": (
                        f"AWF ({available_water_fraction:.2f}) < 0.5 and rain in 48h "
                        f"({rain_next_48h:.1f}mm) < {rain_threshold_mm}mm; "
                        f"planned irrigation credit {irrigation_credit:.1f}mm"
                    ),
                })
                irrigation_credit += depth_mm
        previous_raw_soil = raw_soil
    return recommendations


def calculate_water_metrics(df, recommendations, field_capacity_mm):
    """Return presentation-ready water efficiency and crop health metrics."""
    recommended_water = sum(item["depth_mm"] for item in recommendations)
    fixed_daily_water = max(0, len(df) * field_capacity_mm * 0.2)
    water_saved = max(0, fixed_daily_water - recommended_water)
    safe_days = ((df["soil_mm"] >= field_capacity_mm * 0.5) & (df["soil_mm"] <= field_capacity_mm)).sum()
    return {
        "recommended_water_mm": round(recommended_water, 1),
        "estimated_water_saved_mm": round(water_saved, 1),
        "safe_moisture_days": int(safe_days),
        "forecast_days": int(len(df)),
        "irrigation_events_avoided": max(0, len(df) - len(recommendations)),
    }


def weather_risks(df, field_capacity_mm, wilting_point_mm):
    """Identify simple, explainable weather and moisture risks."""
    risks = []
    if (df["temp_C"] >= 35).any():
        risks.append("Heat alert: forecast temperature reaches 35 C or higher.")
    dry_days = (df["precip_mm"] < 1).astype(int)
    if dry_days.rolling(3).sum().max() >= 3:
        risks.append("Dry-spell alert: at least three consecutive low-rain days.")
    if (df["precip_mm"] >= 25).any():
        risks.append("Runoff alert: heavy rainfall may exceed field infiltration capacity.")
    if (df["soil_mm"] <= wilting_point_mm).any():
        risks.append("Wilting-point alert: simulated soil moisture reaches the crop stress floor.")
    if not risks:
        risks.append("No major weather or soil-moisture risks detected.")
    return risks
