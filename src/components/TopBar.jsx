import React from 'react'

/**
 * Material Design 3 Top App Bar
 * Elevation + contrast + layout polish.
 */

export default function TopBar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--md-sys-color-surface-container-high)',
        borderBottom: '1px solid var(--md-sys-color-outline)',
        boxShadow: 'var(--md-elevation-1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--md-layout-max-width)',
          margin: '0 auto',
          padding: '12px var(--md-layout-padding)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 'var(--md-sys-typescale-title-large-size)',
            fontWeight: 'var(--md-sys-typescale-title-large-weight)',
            color: 'var(--md-sys-color-primary)',
          }}
        >
          CycleDash
        </div>
        <div
          style={{
            fontSize: 'var(--md-sys-typescale-label-large-size)',
            fontWeight: 'var(--md-sys-typescale-label-large-weight)',
            color: 'var(--md-sys-color-on-surface-variant)',
          }}
        >
          MD3 Prototype
        </div>
      </div>
    </header>
  )
}
