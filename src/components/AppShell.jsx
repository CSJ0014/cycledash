import React from 'react'
import TopBar from './TopBar.jsx'
import Tabs from './Tabs.jsx'
import Container from './Container.jsx'

export default function AppShell({ children }) {
  return (
    <div style={{ background: 'var(--md-sys-color-surface)', minHeight: '100vh' }}>
      <TopBar />
      <Container>
        <Tabs />
        <main style={{ marginTop: 24 }}>{children}</main>
      </Container>
    </div>
  )
}
