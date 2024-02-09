import IconYoga from '../../assets/yoga.svg'
import IconYogaWhite from '../../assets/yogaWhite.svg'
import './styles'
import { Nav, NoUnderlineLink, VerticalContainer, SpanImg } from "./styles";

function VerticalNav() {
  return (
    <VerticalContainer className={'VerticalNav'} style={{gridArea: 'VerticalNav'}}>
      <Nav className="DashboardNav">
        <NoUnderlineLink to="#">
          <SpanImg
            style={{ backgroundImage: `url(${IconYoga})`}}
            onMouseOver={e => (e.currentTarget.style.backgroundImage = `url(${IconYogaWhite})`)}
            onMouseOut={e => (e.currentTarget.style.backgroundImage = `url(${IconYoga})`)}
          />
        </NoUnderlineLink>
        <NoUnderlineLink to="#" />
        <NoUnderlineLink to="#" />
        <NoUnderlineLink to="#" />
      </Nav>
    </VerticalContainer>
  );
}

export default VerticalNav;
