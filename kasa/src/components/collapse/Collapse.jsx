import React, { useState } from 'react';
import './Collapse.scss'; // Import de la feuille de style SCSS pour l'animation

const Collapse = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour savoir si le contenu est ouvert ou fermé

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState); // Alterne entre ouvert et fermé
  };

  return (
    <div className={`collapse ${className}`}>
      <button
        className="collapse-btn"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title}`} // Lier le bouton au contenu
      >
        {title}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
          &#9660;
        </span>{' '}
        {/* Flèche de direction */}
      </button>

      {/* Animation du contenu */}
      <div
        id={`collapse-content-${title}`}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`collapse-btn-${title}`}
        style={{ maxHeight: isOpen ? '200px' : '0' }} // Contrôle dynamique de la hauteur
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
