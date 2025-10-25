// Base API path — works for both local dev (localhost:8000) and Vercel (/api)
const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"
    : "/api";

// ---------------------
// Ride API Functions
// ---------------------

export async function listRides() {
  const res = await fetch(`${API_BASE}/rides`);
  if (!res.ok) throw new Error(`Failed to list rides: ${res.status}`);
  return res.json();
}

export async function getRide(fname) {
  const res = await fetch(`${API_BASE}/rides/${encodeURIComponent(fname)}`);
  if (!res.ok) throw new Error(`Ride not found: ${res.status}`);
  return res.json();
}

export async function generateReport(fname) {
  const res = await fetch(`${API_BASE}/report/generate/${encodeURIComponent(fname)}`, {
    method: "POST",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Report generation failed: ${text}`);
  }
  const blob = await res.blob();
  return blob;
}

// ---------------------
// Axios Instance (Optional)
// ---------------------

import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// Optional helper: to test connectivity
export async function testConnection() {
  try {
    const res = await fetch(`${API_BASE}/rides`);
    if (!res.ok) throw new Error("API unreachable");
    const data = await res.json();
    console.log("✅ API reachable:", data);
    return true;
  } catch (err) {
    console.error("❌ API connection failed:", err);
    return false;
  }
}
