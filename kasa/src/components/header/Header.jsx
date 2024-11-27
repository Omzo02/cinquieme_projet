import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo-header.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
};

export default Header;
