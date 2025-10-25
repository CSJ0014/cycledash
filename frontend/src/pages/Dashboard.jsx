import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { listRides } from '../api'
import { Grid, Card, CardActionArea, CardContent, Typography, Stack } from '@mui/material'

export default function Dashboard() {
  const [rides, setRides] = React.useState([])
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  React.useEffect(() => {
    listRides()
      .then(data => setRides(data.rides || []))
      .catch(e => setError(e.message))
  }, [])

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Recent Rides</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={2}>
        {rides.map((fname) => (
          <Grid item xs={12} sm={6} md={4} key={fname}>
            <Card elevation={2}>
              <CardActionArea onClick={() => navigate(`/ride/${encodeURIComponent(fname)}`)}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700}>{fname}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to view analysis & generate report
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {rides.length === 0 && (
          <Grid item xs={12}>
            <Typography color="text.secondary">No rides found (demo). API is live—add real data next.</Typography>
          </Grid>
        )}
      </Grid>
    </Stack>
  )
}
