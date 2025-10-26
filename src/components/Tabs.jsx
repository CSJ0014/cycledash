import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Material Design 3 Tabs – Web App Variant
 * Uses React Router NavLink to sync navigation state
 * Automatically highlights the active route
 */

export default function Tabs() {
  const tabs = [
    { to: '/upload', label: 'Ride Upload' },
    { to: '/rides', label: 'Ride History' },
    { to: '/analysis', label: 'Ride Analysis' },
    { to: '/pmc', label: 'Training PMC' },
    { to: '/analytics', label: 'Analytics' },
    { to: '/settings', label: 'Settings' },
  ]

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid var(--md-sys-color-outline)',
        background: 'var(--md-sys-color-surface)',
        padding: '0 12px',
        overflowX: 'auto',
      }}
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end
          style={({ isActive }) => ({
            position: 'relative',
            padding: '12px 16px',
            fontSize: 'var(--md-sys-typescale-label-large-size)',
            fontWeight: 'var(--md-sys-typescale-label-large-weight)',
            color: isActive
              ? 'var(--md-sys-color-primary)'
              : 'var(--md-sys-color-on-surface-variant)',
            textDecoration: 'none',
            transition: `color var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard)`,
          })}
        >
          {({ isActive }) => (
            <span style={{ position: 'relative' }}>
              {tab.label}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    borderRadius: '2px',
                    backgroundColor: 'var(--md-sys-color-primary)',
                    transition: `all var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard)`,
                  }}
                />
              )}
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
