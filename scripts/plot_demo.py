import os
import pandas as pd
import json
import matplotlib.pyplot as plt

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RESULTS_DIR = os.path.join(BASE_DIR, 'results')

def main():
    csv_file = os.path.join(RESULTS_DIR, 'field_1_soilmoisture.csv')
    json_file = os.path.join(RESULTS_DIR, 'field_1_recs.json')

    df = pd.read_csv(csv_file)
    df['date'] = pd.to_datetime(df['date'])

    try:
        with open(json_file, 'r') as f:
            recs = json.load(f)
    except:
        recs = []

    fig, ax1 = plt.subplots(figsize=(10, 6))

    color = 'tab:blue'
    ax1.set_xlabel('Date')
    ax1.set_ylabel('Soil Moisture (mm)', color=color)
    ax1.plot(df['date'], df['soil_mm'], color=color, marker='o', label='Soil Moisture')
    ax1.tick_params(axis='y', labelcolor=color)

    ax2 = ax1.twinx()
    color = 'tab:cyan'
    ax2.set_ylabel('Precipitation (mm)', color=color)
    ax2.bar(df['date'], df['precip_mm'], color=color, alpha=0.5, label='Precipitation')
    ax2.tick_params(axis='y', labelcolor=color)

    # Plot recommendations
    for rec in recs:
        rec_date = pd.to_datetime(rec['date'])
        ax1.axvline(x=rec_date, color='red', linestyle='--', alpha=0.7)
        ax1.text(rec_date, df['soil_mm'].max(), ' Irrigate', color='red', rotation=90, verticalalignment='top')

    fig.tight_layout()
    plt.title('Smart Irrigation Demo - Field 1')

    out_plot = os.path.join(RESULTS_DIR, 'demo_plot.png')
    plt.savefig(out_plot, dpi=150)
    print("Demo plot saved")

if __name__ == '__main__':
    main()
