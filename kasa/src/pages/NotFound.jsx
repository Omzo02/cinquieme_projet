import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout' // Vérifie le chemin si nécessaire

const NotFound = () => (
  <Layout>
    {' '}
    {/* Utilise Layout pour inclure le header et footer */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h1
        style={{ fontSize: '10rem', color: 'red', margin: 0, fontweight: 500 }}
      >
        404
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0', color: 'red' }}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
          fontSize: '1rem',
          marginTop: '20px',
        }}
      >
        Retourner sur la page d’accueil
      </Link>
    </div>
  </Layout>
)

export default NotFound
