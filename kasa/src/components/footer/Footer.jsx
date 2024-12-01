import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo-footer.png'; // Assurez-vous que le logo est bien dans ce chemin

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo de Kasa pour le footer" />
      </div>
      <p>© 2024 Kasa. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
