import os
import runpy

# Streamlit Community Cloud default entrypoint
if __name__ == "__main__":
    app_path = os.path.join(os.path.dirname(__file__), "app.py")
    runpy.run_path(app_path, run_name="__main__")
else:
    app_path = os.path.join(os.path.dirname(__file__), "app.py")
    runpy.run_path(app_path, run_name="__main__")
