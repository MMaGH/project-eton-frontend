import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavBar = styled.div`
    position: fixed;
    height: 100vh;
    width: 15vw;
    left: -10%;
    top: 0;
    background-color: #000a24;
    transition: 500ms;
    border-right: 3px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    :hover {
        left: 0;
        transition: 500ms;
    }
`

export const NavItem = styled(Link)`
    position: relative;
    display: inline-block;
    left: -45px;
    margin: 10px;
    width: 15vw;
    height: 6vh;
    font-size: 3vmin;
    padding: 10px;
    border-radius: 10px;
    background-color: #001c63;
    color: white;
    text-decoration: none;
    text-align: right;
`