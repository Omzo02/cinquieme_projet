import React from 'react'
import styled from 'styled-components'
import whiteLogo from '../assets/images/logo.png' // Assure-toi d’avoir un logo blanc ici

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
`

const FooterLogo = styled.img`
  height: 40px;
  filter: grayscale(100%) brightness(1000%); /* Assure que le logo est bien blanc */
  margin-bottom: 10px; /* Espace entre le logo et le texte */
`

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={whiteLogo} alt="Logo Kasa" />
      <FooterText>© 2022 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  )
}

export default Footer
