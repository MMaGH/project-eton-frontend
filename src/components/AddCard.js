import React from 'react'
import getDatahandler from "../service/Datahandler";
import { AddContainer,
        ShowAddCardButton,
        AddCardForm,
        AddCardTitle,
        AddCardLabel,
        AddCardSubmit,
        AddCardContent,
        Card,
        AddCardSettings,
        ColorInput} from "../styled_components/AddCard";


export default function AddCard(props) {
    const datahandler = getDatahandler();

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

    function submitHandler(event) {
        event.preventDefault();
        let note = {
            "id": 0, 
            "header": event.target[0].value,
            "content": event.target[1].value,
            "background": event.target[2].value,
            "color": event.target[3].value
        }


        datahandler.addNote(note, (data) => props.setRefresh(data))
    }

    return (
            <AddContainer id="AddContainer" className="activated">
                 <AddCardForm onSubmit={submitHandler}>
                     <Card id="newCard">
                        <AddCardTitle placeholder="Title"/>
                        <AddCardContent placeholder="Note goes here" />
                     </Card>
                    <AddCardSettings>
                        <AddCardLabel className="backgroundLabel">Background</AddCardLabel>
                        <ColorInput onChange={backgroundChangeHandler} type="color" className="background" defaultValue="#FFFFFF"/>
                        <AddCardLabel className="colorLabel">Font and Border</AddCardLabel>
                        <ColorInput onChange={contentChangeHandler} type="color" className="content"/>
                        <AddCardSubmit>Save Note</AddCardSubmit>
                    </AddCardSettings>
                 </AddCardForm>
                
                <ShowAddCardButton onClick={click} id="showButton">Add Note</ShowAddCardButton>
            </AddContainer>
    )
}
