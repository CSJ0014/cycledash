from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="CycleDash API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- RIDES ENDPOINT ----------
@app.get("/api/rides")
def list_rides():
    print("✅ /api/rides called")
    return JSONResponse({
        "rides": ["demo_ride_001.json", "demo_ride_002.json", "demo_ride_003.json"]
    })

# ---------- REPORT ENDPOINT ----------
@app.post("/api/report/generate/{filename}")
def generate_report(filename: str):
    path = f"/tmp/{filename}_report.txt"
    with open(path, "w") as f:
        f.write(f"Report for {filename}\nGenerated successfully.")
    return FileResponse(path, media_type="text/plain", filename="report.txt")
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CycleDash API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/rides")
def list_rides():
    print("✅ /api/rides was called")
    return JSONResponse({"rides": ["demo_ride_001.json", "demo_ride_002.json", "demo_ride_003.json"]})

@app.post("/api/report/generate/{filename}")
def generate_report(filename: str):
    return JSONResponse({"message": f"Report for {filename} generated successfully!"})
