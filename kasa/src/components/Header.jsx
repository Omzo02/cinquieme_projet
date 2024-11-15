import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Définir StyledLink ici
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #ff6347; // Par exemple, une couleur de survol
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={logo} alt="Logo Kasa" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
