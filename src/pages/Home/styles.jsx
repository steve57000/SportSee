import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerButtons = styled.div`
  width: 80%;
  height: 10vh;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ButtonUsers = styled(NavLink)`
  width: 200px;
  height: 50px;
  display: inline-block;
  background-color: black;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.37);
  text-decoration: none;
  color: #FF6060;
  transition: all .3s ease-in-out;
  &&:hover{
    background-color: #FF6060;
    color: white;
    transform: scale(1.2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.37);
  }
`

