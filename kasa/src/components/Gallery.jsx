import React, { useState } from 'react'

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="gallery">
      {images.length > 1 && (
        <>
          <button onClick={previousImage}>Précédent</button>
          <button onClick={nextImage}>Suivant</button>
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ height: '300px', objectFit: 'cover' }}
      />
    </div>
  )
}

export default Gallery
