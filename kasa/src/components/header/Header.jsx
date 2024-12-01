import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo-header.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa - Accueil" className="logo" />
      <nav>
        <Link to="/" aria-label="Page d'accueil">
          Accueil
        </Link>
        <Link to="/about" aria-label="Page À propos">
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
