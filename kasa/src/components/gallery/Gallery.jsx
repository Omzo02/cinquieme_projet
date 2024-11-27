import React, { useState } from 'react';
import './Gallery.css'; // Ajoute le fichier CSS lié

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion des clics sur "Image suivante"
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Gestion des clics sur "Image précédente"
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Si une seule image, cacher les boutons et la numérotation
  if (images.length === 1) {
    return (
      <div className="gallery">
        <img src={images[0]} alt="Unique image" className="gallery-image" />
      </div>
    );
  }

  return (
    <div className="gallery">
      <button
        className="gallery-btn"
        onClick={handlePrev}
        aria-label="Image précédente"
      >
        Précédent
      </button>
      <div className="gallery-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-image"
        />
        <div className="gallery-number">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <button
        className="gallery-btn"
        onClick={handleNext}
        aria-label="Image suivante"
      >
        Suivant
      </button>
    </div>
  );
};

export default Gallery;
