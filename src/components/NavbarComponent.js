import React from 'react'
import { NavBar, NavItem, NavOpenButton } from "../styled_components/Navbar";
import { showAddCard } from "./AddCard";


export default function Header() {


    function clickHandler(event) {
        event.preventDefault();
        let navbar = document.querySelector("#navbar");
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open")
        } else {
            navbar.classList.add("open");
        }
    }


    return (
        <NavBar id="navbar">
           <NavItem to="/">Notes</NavItem>
           <NavItem to="/task">Tasks</NavItem>
           <NavItem>Profile</NavItem>
           <NavOpenButton onClick={clickHandler}>&#9776;</NavOpenButton>
        </NavBar>
    )
}
