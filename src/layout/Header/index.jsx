import { ReactComponent as Logo } from '../../logo.svg';
import {HeaderContainer, HeaderLogo, Nav, NavText, NoUnderlineLink} from "./styles";

function Header() {

  return (
    <HeaderContainer className={'HeaderContainer'} style={{gridArea: 'HeaderContainer'}}>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      <Nav className="Header-nav">
        <NoUnderlineLink to="/">
          <NavText>Accueil</NavText>
        </NoUnderlineLink>
        <NoUnderlineLink to="/">
          <NavText>Profil</NavText>
        </NoUnderlineLink>
          <NoUnderlineLink to="/">
          <NavText>Réglage</NavText>
        </NoUnderlineLink>
          <NoUnderlineLink to="/">
          <NavText>Communauté</NavText>
        </NoUnderlineLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
