from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/api/rides")
def rides():
    return JSONResponse({"rides": ["demo1", "demo2", "demo3"]})
