import React from 'react'
import logements from '../datas/logements.json'
import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
`

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  width: 100%;
  height: 300px; // Hauteur fixe pour chaque carte
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; // Remplir tout l'espace du conteneur
`

const Image = styled.img`
  width: 100%; // L'image occupe toute la largeur du conteneur
  height: 100%; // L'image occupe toute la hauteur du conteneur
  object-fit: cover; // L'image s'adapte sans déformation
`

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`

const Gallery = () => {
  return (
    <GalleryContainer>
      {logements.map((logement) => (
        <Card key={logement.id}>
          <ImageContainer>
            <Image src={logement.cover} alt={logement.title} />
            <CardTitle>{logement.title}</CardTitle>
          </ImageContainer>
        </Card>
      ))}
    </GalleryContainer>
  )
}

export default Gallery
