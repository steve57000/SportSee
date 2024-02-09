import {styled} from "styled-components";

export const ContainerNumberActivity = styled.div`
  width: 690px;
  height: 24px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 288px 288px 258px 35px 258px;
  grid-template-rows: 142px 346px 262px;
  gap: 0px 0px;
  grid-template-areas:
    "Titles . . . ."
    "Activity Activity Activity . Infos"
    "Objectif Radar KPI . Infos";
  width: 1126px;
  height: 779px;
  margin-block-start: 50px;
  margin-left: 100px;
`
export const Titles = styled.div`
  grid-area: Titles;
  width: 400px;
  height: 90px;
  border: 1px solid black;
  & h1 {
    font-size: 48px;
    margin: 0;
  }
  & p {
    margin: 0;
  }
`
export const Activity = styled.div`
  grid-area: Activity;
  width: 835px;
  height: 320px;
  background-color: #FBFBFB;
;
`
export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 0fr;
  gap: 0px 0px;
  grid-template-areas:
    "Calories"
    "Proteines"
    "Glucides"
    "Lipides";
  grid-area: Infos;
  width: 258px;
  height: 608px;
`
export const Proteines = styled.div`
  grid-area: Proteines;
  width: 258px;
  height: 124px;
  background-color: #FBFBFB;
`
export const Glucides = styled.div`
  grid-area: Glucides;
  width: 258px;
  height: 124px;
  background-color: #FBFBFB;
`
export const Lipides = styled.div`
  grid-area: Lipides;
  width: 258px;
  height: 124px;
  background-color: #FBFBFB;
`
export const Calories = styled.div`
  grid-area: Calories;
  width: 258px;
  height: 124px;
  background-color: #FBFBFB;
`
export const Objectif = styled.div`
  grid-area: Objectif;
  width: 258px;
  height: 263px;
  background-color: #FF0000;
`
export const Radar = styled.div`
  grid-area: Radar;
  width: 258px;
  height: 263px;
  background-color: #282D30;
`
export const KPI = styled.div`
  grid-area: KPI;
  width: 258px;
  height: 263px;
  background-color: #FBFBFB;
`

// .KPI {
//     grid-area: KPI;
//     width: 258px;
//     height: 263px;
// }