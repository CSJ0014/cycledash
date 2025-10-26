import React from 'react'

/**
 * Material Design 3 Button
 * Supports: filled | tonal | outlined
 * Includes hover, focus, and disabled states.
 */

export default function Button({
  children,
  variant = 'filled',
  onClick,
  disabled = false,
  style,
  ...props
}) {
  const base = {
    fontFamily: 'inherit',
    fontSize: 'var(--md-sys-typescale-label-large-size)',
    fontWeight: 'var(--md-sys-typescale-label-large-weight)',
    borderRadius: 'var(--md-sys-shape-corner-full)', // pill-shaped
    padding: '12px 24px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `all var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard)`,
    outline: 'none',
    boxShadow: disabled ? 'none' : 'var(--md-elevation-1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '120px',
  }

  const variants = {
    filled: {
      background: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)',
    },
    tonal: {
      background: 'var(--md-sys-color-primary-container)',
      color: 'var(--md-sys-color-on-primary-container)',
    },
    outlined: {
      background: 'transparent',
      color: 'var(--md-sys-color-primary)',
      border: '1px solid var(--md-sys-color-outline)',
      boxShadow: 'none',
    },
  }

  const hoverStyle =
    variant === 'filled'
      ? { filter: 'brightness(1.08)' }
      : variant === 'tonal'
      ? { filter: 'brightness(1.04)' }
      : { background: 'rgba(103,80,164,0.08)' }

  const activeStyle = { transform: 'scale(0.98)' }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        ...base,
        ...variants[variant],
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, hoverStyle)
      }}
      onMouseLeave={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, variants[variant])
      }}
      onMouseDown={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, activeStyle)
      }}
      onMouseUp={(e) => {
        if (!disabled) Object.assign(e.currentTarget.style, variants[variant])
      }}
      {...props}
    >
      {children}
    </button>
  )
}
