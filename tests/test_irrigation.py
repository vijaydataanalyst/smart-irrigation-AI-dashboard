import sys
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from bucket_model import simulate_bucket
from irrigation_engine import recommend_irrigation, calculate_water_metrics


def forecast_frame(soil_values, rain_values=None):
    rain_values = rain_values or [0.0] * len(soil_values)
    return pd.DataFrame({
        "date": pd.date_range("2026-01-01", periods=len(soil_values)),
        "precip_mm": rain_values,
        "soil_mm": soil_values,
        "temp_C": [30.0] * len(soil_values),
    })


def test_bucket_respects_field_capacity_and_wilting_point():
    dates = pd.date_range("2026-01-01", periods=2)
    moisture = simulate_bucket(
        dates, pd.Series([100.0, 0.0]), pd.Series([0.0, 100.0]),
        S0_mm=60.0, field_capacity_mm=100.0, wilting_point_mm=30.0, Kc=1.0
    )
    assert moisture.max() <= 100.0
    assert moisture.min() >= 30.0


def test_recommendation_is_suppressed_when_rain_is_sufficient():
    frame = forecast_frame([40.0, 40.0], [10.0, 10.0])
    assert recommend_irrigation(frame, "field_1", "Field 1", "Maize", 100.0) == []


def test_recommendation_contains_explanation_and_depth():
    frame = forecast_frame([40.0, 40.0], [0.0, 0.0])
    recommendations = recommend_irrigation(frame, "field_1", "Field 1", "Maize", 100.0)
    assert recommendations
    assert recommendations[0]["depth_mm"] > 0
    assert "AWF" in recommendations[0]["reason"]


def test_water_metrics_are_reproducible():
    frame = forecast_frame([60.0, 55.0])
    recommendations = [{"depth_mm": 10.0}]
    metrics = calculate_water_metrics(frame, recommendations, 100.0)
    assert metrics["recommended_water_mm"] == 10.0
    assert metrics["forecast_days"] == 2
