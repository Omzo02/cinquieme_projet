import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <main style={{ flex: 1 }}>{children}</main>{' '}
    {/* Prend tout l’espace disponible */}
    <Footer />
  </div>
)

export default Layout
