// Relative base = same domain as frontend (Vercel handles /api routes)
const base = ''

export async function listRides() {
  const res = await fetch(`${base}/api/rides`)
  if (!res.ok) throw new Error('Failed to list rides')
  return res.json() // { rides: [...] }
}

export async function getRide(rideId) {
  const res = await fetch(`${base}/api/rides/${encodeURIComponent(rideId)}`)
  if (!res.ok) throw new Error('Ride not found')
  return res.json()
}

export async function generateReport(rideId) {
  const res = await fetch(`${base}/api/report/generate/${encodeURIComponent(rideId)}`, {
    method: 'POST'
  })
  if (!res.ok) throw new Error('Report generation failed')
  return await res.blob()
}
