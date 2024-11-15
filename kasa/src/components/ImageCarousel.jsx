// src/components/ImageCarousel.js
import React, { useState } from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Hauteur fixe */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Couleur de fond si image vide */
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  ${(props) => (props.left ? 'left: 10px;' : 'right: 10px;')}
  z-index: 1;
`

const ImageCounter = styled.div`
  position: absolute;
  bottom: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
`

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Si le nombre d'images est 1 ou moins, cache les boutons de navigation
  const showNavigation = images.length > 1

  return (
    <CarouselContainer>
      <CarouselImage
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      {showNavigation && (
        <>
          <Button left onClick={goToPreviousImage}>
            ‹
          </Button>
          <Button onClick={goToNextImage}>›</Button>
          <ImageCounter>
            {currentIndex + 1} / {images.length}
          </ImageCounter>
        </>
      )}
    </CarouselContainer>
  )
}

export default ImageCarousel
