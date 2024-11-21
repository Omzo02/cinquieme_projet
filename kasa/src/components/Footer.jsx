import React from 'react';
import logoFooter from '../assets/images/logo-footer.png';
import '../styles/components/layout.scss';
import '../styles/components/footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src={logoFooter} alt="Logo de Kasa pour le footer" />
    </div>
    <p>© 2024 Kasa. Tous droits réservés.</p>
  </footer>
);

export default Footer;
