import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import RideUpload from './pages/RideUpload.jsx'
import RideHistory from './pages/RideHistory.jsx'
import RideAnalysis from './pages/RideAnalysis.jsx'
import TrainingPMC from './pages/TrainingPMC.jsx'
import Analytics from './pages/Analytics.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  const location = useLocation()
  return (
    <AppShell>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/rides" replace />} />
        <Route path="/upload" element={<RideUpload />} />
        <Route path="/rides" element={<RideHistory />} />
        <Route path="/analysis" element={<RideAnalysis />} />
        <Route path="/pmc" element={<TrainingPMC />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppShell>
  )
}