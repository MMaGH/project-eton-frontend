import styled from "styled-components";
import { Link } from "react-router-dom";




export const NavBar = styled.div`
    position: fixed;
    height: 5vh;
    width: fit-content;
    left: -100%;
    top: 0;
    background-color: #FFFFFF;
    transition: 3000ms;
    border-right: 3px solid #000000;
    border-bottom-right-radius: 10px;
    padding-left: 2vh;
    padding-right: 1vh;
    &.open {
        left: 3vh;
        transition: 500ms;
    }
`

export const NavItem = styled(Link)`
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: fit-content;
    height: 3vh;
    font-size: 3vmin;
    padding-bottom: 1vh;
    padding-left: 1vw;
    padding-right: 1vw;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #000000;
    text-decoration: none;
    text-align: right;
    transition: 500ms;
    &:hover {
        transition: 500ms;
        background-color: rgba(0, 0, 0, 0.3)
    }
`

export const NavOpenButton = styled.div`
    position: fixed;
    height: inherit;
    width: 5vh;
    left: 0;
    top: 0;
    color: white;
    font-size: 3.5vh;
    font-weight: bold;
    background-color: #000000;
    border-bottom-right-radius: 10px;
    border-bottom: 0.3vh solid white;
    border-right: 0.3vh solid white;
    cursor: pointer;
`