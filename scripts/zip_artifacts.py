import zipfile
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RESULTS_DIR = os.path.join(BASE_DIR, 'results')
ZIP_FILE = os.path.join(BASE_DIR, 'results_artifacts.zip')

with zipfile.ZipFile(ZIP_FILE, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(RESULTS_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, BASE_DIR)
            zipf.write(file_path, arcname)

print("Artifacts zipped successfully.")
