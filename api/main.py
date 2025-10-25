# /api/main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/rides")
def list_rides():
    return [
        {"title": "Morning Ride", "date": "2025-10-24", "distance": 25.3},
        {"title": "Evening Tempo", "date": "2025-10-23", "distance": 18.7},
    ]

@app.get("/")
def root():
    return {"message": "CycleDash API running"}
