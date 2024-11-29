import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`collapse ${className}`}>
      {/* Bouton pour ouvrir/fermer */}
      <button
        className="collapse-btn"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title}`}
        id={`collapse-btn-${title}`}
      >
        {title}
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </button>

      {/* Contenu conditionnellement affiché */}
      <div
        id={`collapse-content-${title}`}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`collapse-btn-${title}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
