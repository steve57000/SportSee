import React from 'react'
import {styled} from "styled-components";

const CardInfo = styled.div`
  width: 258px;
  height: 124px;
  background-color: #FBFBFB;
  border: 1px solid black;
`

function KeyData( {dataCard, dataName} ) {
    // State (état, données)

    // Comportement

    // affichage (render)
    return (
        <CardInfo>
            <span>{dataCard}</span>
            <span>{dataName}</span>
        </CardInfo>

    );
}

export default KeyData;