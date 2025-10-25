from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict to your Vercel domain later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Hardcoded demo list (proves API works in Vercel)
@app.get("/api/rides")
def list_rides():
    return JSONResponse({"rides": [
        "demo_ride_001.json",
        "demo_ride_002.json",
        "demo_ride_003.json"
    ]})

# Hardcoded demo ride payload (so the details page works)
@app.get("/api/rides/{ride_id}")
def get_ride(ride_id: str):
    return JSONResponse({
        "id": ride_id,
        "date": "2025-10-10",
        "distance_miles": 42.35,
        "avg_power_w": 216,
        "normalized_power_w": 229,
        "duration_minutes": 123,
        "tss": 120,
        "if": 0.78,
        "notes": "Demo ride payload served from Vercel."
    })
