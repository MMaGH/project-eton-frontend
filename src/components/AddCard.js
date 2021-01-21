import React from 'react'
import { AddContainer, ShowAddCardButton } from "../styled_components/AddCard";


export default function AddCard() {

    function click() {
        let navbar = document.querySelector("#AddContainer");
        let showButton = document.querySelector("#showButton");
        console.log(navbar)
        if (navbar.classList.contains("activated")) {
            navbar.classList.remove("activated");
            showButton.innerText = "Add Note";
        } else {
            navbar.classList.add("activated")
            showButton.innerText = "Close";
        }
    }
    return (
            <AddContainer id="AddContainer">
                <ShowAddCardButton onClick={click} id="showButton">Add Note</ShowAddCardButton>
            </AddContainer>
    )
}
