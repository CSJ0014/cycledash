import React from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'

/**
 * CycleDash — Dashboard / Ride History
 * Demonstrates MD3 layout rhythm, color, and elevation.
 */

export default function RideHistory() {
  // Mock data (replace later with API integration)
  const recentRides = [
    {
      id: 1,
      title: 'Zwift Endurance Ride',
      duration: '1h 30m',
      distance: '28.4 mi',
      avgPower: '172 W',
      stress: 'TSS 78',
    },
    {
      id: 2,
      title: 'Threshold Intervals',
      duration: '1h 00m',
      distance: '20.1 mi',
      avgPower: '195 W',
      stress: 'TSS 90',
    },
    {
      id: 3,
      title: 'Outdoor Ride – Saturday',
      duration: '2h 10m',
      distance: '42.8 mi',
      avgPower: '165 W',
      stress: 'TSS 102',
    },
  ]

  return (
    <div
      style={{
        display: 'grid',
        gap: '24px',
      }}
    >
      {/* Header Section */}
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
          Recent Rides
        </h1>
        <Button variant="filled" onClick={() => alert('Upload Ride')}>
          Upload New Ride
        </Button>
      </div>

      {/* Ride Cards Grid */}
      <div
        style={{
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        }}
      >
        {recentRides.map((ride) => (
          <Card
            key={ride.id}
            header={ride.title}
            style={{
              background: 'var(--md-sys-color-surface-container)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginBottom: '12px',
              }}
            >
              <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Duration: <strong>{ride.duration}</strong>
              </div>
              <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Distance: <strong>{ride.distance}</strong>
              </div>
              <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Avg Power: <strong>{ride.avgPower}</strong>
              </div>
              <div style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                {ride.stress}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="tonal"
                onClick={() => alert(`Open ${ride.title}`)}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Weekly Summary Card */}
      <Card
        header="Weekly Summary"
        style={{
          background: 'var(--md-sys-color-surface-container-high)',
          border: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: '16px',
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontWeight: 600,
                color: 'var(--md-sys-color-on-surface)',
              }}
            >
              Total Time
            </h3>
            <p className="body-medium">4h 40m</p>
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                fontWeight: 600,
                color: 'var(--md-sys-color-on-surface)',
              }}
            >
              Total Distance
            </h3>
            <p className="body-medium">91.3 miles</p>
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                fontWeight: 600,
                color: 'var(--md-sys-color-on-surface)',
              }}
            >
              Avg Power
            </h3>
            <p className="body-medium">183 W</p>
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                fontWeight: 600,
                color: 'var(--md-sys-color-on-surface)',
              }}
            >
              CTL / ATL / TSB
            </h3>
            <p className="body-medium">42 / 38 / +4</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
