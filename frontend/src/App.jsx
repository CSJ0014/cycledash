import * as React from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { CssBaseline, AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material'
import Dashboard from './pages/Dashboard.jsx'
import RideAnalysis from './pages/RideAnalysis.jsx'

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cycling Coaching Dashboard
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Dashboard</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ride/:rideId" element={<RideAnalysis />} />
        </Routes>
      </Container>

      <Box sx={{ textAlign: 'center', py: 2, color: 'text.secondary' }}>
        <small>MD3-styled starter • Vercel full-stack</small>
      </Box>
    </>
  )
}
