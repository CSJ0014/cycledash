import * as React from 'react'
import { useParams } from 'react-router-dom'
import { getRide, generateReport } from '../api'
import { Stack, Typography, Paper, Button } from '@mui/material'

export default function RideAnalysis() {
  const { rideId } = useParams()
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    getRide(rideId).then(setData).catch(e => setError(e.message))
  }, [rideId])

  const handleReport = async () => {
    const blob = await generateReport(rideId)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${rideId}_report.txt` // swap to .pdf later
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Ride Analysis</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {data && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight={700}>{data.id || rideId}</Typography>
          <Typography variant="body2" color="text.secondary">{data.date || '—'}</Typography>
          <Typography sx={{ mt: 1 }}>
            Distance: {Number(data.distance_miles ?? 0).toFixed(2)} mi
          </Typography>
          <Typography>Avg Power: {data.avg_power_w ?? 0} W</Typography>
          <Typography>NP: {data.normalized_power_w ?? 0} W</Typography>
          <Typography>Duration: {data.duration_minutes ?? 0} min</Typography>
          <Typography>TSS: {data.tss ?? 0}</Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">{data.notes || ''}</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleReport}>
            Generate Report
          </Button>
        </Paper>
      )}
    </Stack>
  )
}
