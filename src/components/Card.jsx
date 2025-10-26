import React from 'react'

/**
 * Material Design 3 Card
 * Soft elevation, tonal contrast, hover animation.
 */

export default function Card({ header, children, footer, style }) {
  return (
    <div
      style={{
        background: 'var(--md-sys-color-surface-container)',
        borderRadius: 'var(--md-sys-shape-corner-large)',
        boxShadow: 'var(--md-elevation-1)',
        border: '1px solid var(--md-sys-color-outline)',
        padding: '24px',
        transition: `box-shadow var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard), transform 0.2s ease`,
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--md-elevation-2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--md-elevation-1)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {header && (
        <h2
          style={{
            fontSize: 'var(--md-sys-typescale-title-large-size)',
            fontWeight: 'var(--md-sys-typescale-title-large-weight)',
            color: 'var(--md-sys-color-on-surface)',
            marginBottom: '12px',
          }}
        >
          {header}
        </h2>
      )}
      <div
        style={{
          fontSize: 'var(--md-sys-typescale-body-medium-size)',
          fontWeight: 'var(--md-sys-typescale-body-medium-weight)',
          color: 'var(--md-sys-color-on-surface-variant)',
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
      {footer && (
        <div
          style={{
            marginTop: '16px',
            color: 'var(--md-sys-color-on-surface-variant)',
            fontSize: 'var(--md-sys-typescale-label-large-size)',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}
