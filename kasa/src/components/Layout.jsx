import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>{' '}
    {/* Ajout de l'emplacement pour le contenu principal */}
    <Footer />
  </>
);

export default Layout;
