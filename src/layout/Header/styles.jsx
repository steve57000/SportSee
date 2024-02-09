import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 5vh;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  background-color: black;
`;

export const HeaderLogo = styled.div`
  margin-right: 10em;
`;

export const Nav = styled.nav`
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
`;

export const NavText = styled.span`
  color: white;
`;

export const NoUnderlineLink = styled(Link)`
  text-decoration : none
`