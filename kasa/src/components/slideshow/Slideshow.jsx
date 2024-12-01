import React, { useState } from 'react';
import ArrowRight from '../../assets/images/chevron_carousel_right.png';
import ArrowLeft from '../../assets/images/chevron_carousel_left.png';
import './Slideshow.scss';

const Slideshow = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion des clics sur "Suivant"
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Gestion des clics sur "Précédent"
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Si aucune image n'est disponible, on affiche un placeholder
  if (images.length === 0) {
    return <p className="slideshow-placeholder">Aucune image disponible</p>;
  }

  return (
    <div className="slideshow">
      {/* Boutons Précédent et Suivant */}
      {images.length > 1 && (
        <>
          <button
            className="slideshow-button left"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            <img
              src={ArrowLeft}
              alt="Précédent"
              className="slideshow-chevron"
            />
          </button>

          <button
            className="slideshow-button right"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            <img src={ArrowRight} alt="Suivant" className="slideshow-chevron" />
          </button>
        </>
      )}

      {/* Image principale */}
      <div className="slideshow-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>

      {/* Compteur */}
      {images.length > 1 && (
        <div className="slideshow-counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
