import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

/**
 * CycleDash — Training PMC Chart
 * Shows CTL / ATL / TSB trend lines using Recharts + MD3 styling.
 */

export default function TrainingPMC() {
  // Example data (replace with real API data later)
  const weeklyData = [
    { week: 'W1', CTL: 36, ATL: 33, TSB: 3 },
    { week: 'W2', CTL: 38, ATL: 34, TSB: 4 },
    { week: 'W3', CTL: 40, ATL: 39, TSB: 1 },
    { week: 'W4', CTL: 42, ATL: 38, TSB: 4 },
    { week: 'W5', CTL: 44, ATL: 37, TSB: 7 },
  ]

  const weeklyStats = {
    ctl: 44,
    atl: 37,
    tsb: '+7',
    tss: 420,
    workouts: 5,
    loadChange: '+6%',
  }

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--md-sys-typescale-title-large-size)',
            fontWeight: 'var(--md-sys-typescale-title-large-weight)',
            color: 'var(--md-sys-color-on-surface)',
          }}
        >
          Training PMC
        </h1>
        <Button variant="tonal" onClick={() => alert('Sync latest data')}>
          Refresh Metrics
        </Button>
      </div>

      {/* Metric Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
        }}
      >
        <Card header="CTL" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'var(--md-sys-color-primary)',
            }}
          >
            {weeklyStats.ctl}
          </div>
          <p className="body-medium">Chronic Training Load</p>
        </Card>

        <Card header="ATL" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'var(--md-sys-color-secondary)',
            }}
          >
            {weeklyStats.atl}
          </div>
          <p className="body-medium">Acute Training Load</p>
        </Card>

        <Card header="TSB" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: weeklyStats.tsb.startsWith('+')
                ? '#0A7A0A'
                : 'var(--md-sys-color-error)',
            }}
          >
            {weeklyStats.tsb}
          </div>
          <p className="body-medium">Training Stress Balance</p>
        </Card>

        <Card header="Weekly Load" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'var(--md-sys-color-primary)',
            }}
          >
            {weeklyStats.tss}
          </div>
          <p className="body-medium">TSS (Total Stress Score)</p>
        </Card>

        <Card header="Workouts" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'var(--md-sys-color-on-surface)',
            }}
          >
            {weeklyStats.workouts}
          </div>
          <p className="body-medium">This Week</p>
        </Card>

        <Card header="Change" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: weeklyStats.loadChange.startsWith('+')
                ? '#0A7A0A'
                : 'var(--md-sys-color-error)',
            }}
          >
            {weeklyStats.loadChange}
          </div>
          <p className="body-medium">vs Last Week</p>
        </Card>
      </div>

      {/* Chart Card */}
      <Card header="Performance Chart">
        <div style={{ width: '100%', height: '320px' }}>
          <ResponsiveContainer>
            <LineChart
              data={weeklyData}
              margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
            >
              <CartesianGrid
                stroke="var(--md-sys-color-outline)"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="week"
                stroke="var(--md-sys-color-on-surface-variant)"
                tickLine={false}
              />
              <YAxis
                stroke="var(--md-sys-color-on-surface-variant)"
                tickLine={false}
                width={40}
              />
              <Tooltip
                contentStyle={{
                  background: 'var(--md-sys-color-surface-container-high)',
                  border: '1px solid var(--md-sys-color-outline)',
                  borderRadius: '8px',
                  boxShadow: 'var(--md-elevation-1)',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="CTL"
                stroke="var(--md-sys-color-primary)"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="ATL"
                stroke="var(--md-sys-color-secondary)"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="TSB"
                stroke="#0A7A0A"
                strokeWidth={2}
                strokeDasharray="4 3"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Coaching Insights */}
      <Card header="AI Coaching Insights">
        <div style={{ lineHeight: 1.6 }}>
          <p className="body-medium">
            Your training load has increased by <strong>6%</strong> compared to
            last week, improving your CTL by <strong>+2</strong>. Your TSB is
            currently <strong>+7</strong>, indicating optimal recovery balance.
          </p>
          <p className="body-medium" style={{ marginTop: '8px' }}>
            Maintain your current structure for one more week, then introduce a
            threshold progression block if fatigue remains stable.
          </p>
          <div style={{ marginTop: '16px' }}>
            <Button variant="filled" onClick={() => alert('Adjust plan')}>
              Adjust Training Plan
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
