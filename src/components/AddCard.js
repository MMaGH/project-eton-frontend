import React from 'react'
import { AddContainer,
        ShowAddCardButton,
        AddCardForm,
        AddCardTitle,
        AddCardLabel,
        AddCardSubmit,
        AddCardContent,
        Card,
        AddCardSettings,
        ColorPicker,
        Color,
        ColorInput} from "../styled_components/AddCard";


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

    function backgroundChangeHandler(event) {
        let color = event.target.value;
        let card = document.querySelector("#newCard");
        card.style.backgroundColor = color;
    }

    function contentChangeHandler(event) {
        let color = event.target.value;
        let card = document.querySelector("#newCard");
        card.style.color = color;
        card.style.borderColor = color;
    }

    return (
            <AddContainer id="AddContainer" className="activated">
                 <AddCardForm>
                     <Card id="newCard">
                        <AddCardTitle placeholder="Title"/>
                        <AddCardContent placeholder="Note goes here" />
                     </Card>
                    <AddCardSettings>
                        <AddCardLabel>Background Color</AddCardLabel>
                        <ColorInput onChange={backgroundChangeHandler} type="color" className="background" value="#000002"/><br/>
                        <AddCardLabel>Font and Border Color</AddCardLabel>
                        <ColorInput onChange={contentChangeHandler} type="color" className="content" value="#fdffff"/>
                        <AddCardSubmit>Save Note</AddCardSubmit>
                    </AddCardSettings>
                 </AddCardForm>
                
                <ShowAddCardButton onClick={click} id="showButton">Add Note</ShowAddCardButton>
            </AddContainer>
    )
}
