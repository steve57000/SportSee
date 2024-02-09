import React from 'react';

import './styles';

import {ButtonUsers, Container, ContainerButtons} from "./styles";
import {LineChart} from "../../components/LineChart";

function Home() {
  // State (état, données)
    const testIdKarl = 12
    const testIdCecilia = 18

  // affichage (render)
  return (
    <div className="Home" style={{ gridArea: '3/5/3/2'}}>
        <h1>
            Bienvenue sur SportSee
        </h1>
        <Container>
            <h2>Choisir un utilisateur pour lancer l'application: </h2>
            <ContainerButtons >
                <ButtonUsers to={`/user/${testIdKarl}`}>Visiter Karl </ButtonUsers>
                <ButtonUsers to={`/user/${testIdCecilia}`}>Visiter Cécilia </ButtonUsers>
            </ContainerButtons >
        </Container>
        <LineChart id={'12'} />
    </div>
  );
}

export default Home;
