from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/debug")
def debug():
    return JSONResponse({"status": "Backend alive!"})

@app.get("/api/rides")
def list_rides():
    return JSONResponse({
        "rides": [
            "demo_ride_001.json",
            "demo_ride_002.json",
            "demo_ride_003.json"
        ]
    })
