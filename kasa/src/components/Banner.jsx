import React from 'react'
import styled from 'styled-components'
import bannerImage from '../assets/images/banner.png' // Assurez-vous que l'image est bien importée

// Définir le conteneur pour la bannière avec une marge égale à celle du header
const BannerContainer = styled.div`
  width: 100%; /* Prend toute la largeur disponible */
  max-width: 1300px; /* Limite la largeur max si nécessaire */
  margin: 0 auto; /* Centré avec la même marge à gauche et à droite */
  padding: 0 30px; /* Padding pour les marges internes, égales à celles du header */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerImage}); /* L'image de fond */
  background-position: center;
  background-size: cover;
  height: 150px;
  color: white;
  font-size: 24px;
  text-align: center;
  border-radius: 25px;
  margin-bottom: 40px;
`

const BannerText = styled.p`
  margin: 0;
`

const Banner = () => (
  <BannerContainer>
    <BannerText>Chez vous, partout et ailleurs</BannerText>
  </BannerContainer>
)

export default Banner
