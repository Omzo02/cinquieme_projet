import React, { useState } from 'react';
import ArrowRight from '../../assets/images/chevron_carousel_right.png';
import ArrowLeft from '../../assets/images/chevron_carousel_left.png';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow">
      {/* Bouton Précédent, visible même si une seule image */}
      {images.length > 1 && (
        <button className="slideshow-button left" onClick={handlePrev}>
          <img src={ArrowLeft} alt="Précédent" className="slideshow-chevron" />
        </button>
      )}

      {/* Image Principale */}
      <div className="slideshow-image-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>

      {/* Bouton Suivant, visible même si une seule image */}
      {images.length > 1 && (
        <button className="slideshow-button right" onClick={handleNext}>
          <img src={ArrowRight} alt="Suivant" className="slideshow-chevron" />
        </button>
      )}

      {/* Compteur, toujours visible */}
      <div className="slideshow-counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default Slideshow;
