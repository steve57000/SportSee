import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const VerticalContainer = styled.div`
  width: 70px;
  height: 100%;
  padding: 1em 1em;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const Nav = styled.nav`
  height: 50%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &&:hover > .child{
    transform: scale(1.2);
  }
`;

export const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  width: 64px;
  height: 64px;
  background-color: white;
  transition: all .5s ease-in-out;
  overflow: hidden;
  &&:hover {
    background-color: #FF6060;
  }
`
export const SpanImg = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`