import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo-header.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa - Accueil" className="logo" />
      <nav>
        <NavLink
          to="/"
          aria-label="Page d'accueil"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          aria-label="Page À propos"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
