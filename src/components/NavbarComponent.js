import React from 'react'
import { NavBar, NavItem } from "../styled_components/Navbar";
import { showAddCard } from "./AddCard";


export default function Header() {


    return (
        <NavBar id="navbar">
           <NavItem>Notes</NavItem> 
        </NavBar>
    )
}
