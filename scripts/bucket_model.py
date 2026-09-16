import pandas as pd
import numpy as np

def simulate_bucket(dates, precip_mm, pet_mm, S0_mm, field_capacity_mm, wilting_point_mm, Kc=1.0):
    """
    Simulates root-zone soil moisture using a lightweight bucket model.
    """
    soil_mm = np.zeros(len(dates))
    current_moisture = S0_mm

    for i in range(len(dates)):
        # Daily incoming water
        water_in = precip_mm.iloc[i] if isinstance(precip_mm, pd.Series) else precip_mm[i]

        # Evapotranspiration
        pet = pet_mm.iloc[i] if isinstance(pet_mm, pd.Series) else pet_mm[i]
        eta = min(current_moisture, Kc * pet)

        # Update moisture
        new_moisture = current_moisture + water_in - eta

        # Cap at field capacity, floor at wilting point
        if new_moisture > field_capacity_mm:
            new_moisture = field_capacity_mm
        elif new_moisture < wilting_point_mm:
            new_moisture = wilting_point_mm

        soil_mm[i] = new_moisture
        current_moisture = new_moisture

    return pd.Series(soil_mm, index=dates)
