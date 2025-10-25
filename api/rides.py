from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend access
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
    return JSONResponse({
        "rides": ["demo_ride_001.json", "demo_ride_002.json", "demo_ride_003.json"]
    })

@app.get("/health")
def health_check():
    return {"status": "ok"}
