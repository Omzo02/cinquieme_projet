import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.scss';

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Oups ! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retour à l'accueil</Link>
  </div>
);

export default NotFound;
