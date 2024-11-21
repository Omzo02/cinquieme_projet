import React from 'react'
import { Link } from 'react-router-dom'
import logoHeader from '../assets/images/logo-header.png'
import '../styles/components/layout.scss'
import '../styles/components/header.scss'

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">
        <img src={logoHeader} alt="Logo de Kasa pour le header" />
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
