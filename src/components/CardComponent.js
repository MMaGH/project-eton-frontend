import React from 'react'
import {Card,
        CardHeader,
        CardContent,
        CardPinButton,
        CardCloseButton} from '../styled_components/Card'


export default function CardComponent(props) {
    
    const datahandler = props.datahandler;
    const card = props.card;

    const style = {
         "background-color": card.background,
         "color": card.color,
         "borderColor": card.color
     }

    function clickHandler(event) {
        event.preventDefault();
        let target = document.querySelector("#card" + card.id).querySelector(".content")
        console.log(target)
        if (target.classList.contains("collapsed")) {
            target.classList.remove("collapsed");
            event.target.innerText = "Collapse"
        } else {
            event.target.innerText = "Open"
            target.classList.add("collapsed");
        }
    }
    
    function pinHandler(event) {
        event.preventDefault();
        if (card.pinned) {
            card.pinned = false;
        } else {
            card.pinned = true;
        }
        datahandler.updateNoteById(card.id, card, (data) => props.setRefresh(data));
    }

    return (
        <Card style={style} id={"card" + card.id}>
            <CardPinButton  className={card.pinned ? "pinned" : "" } onClick={pinHandler}/>
            <CardHeader>{card.header}</CardHeader>
            <CardContent className="content">{card.content}</CardContent>
            <CardCloseButton onClick={clickHandler}>Collapse</CardCloseButton>
        </Card>
    )
}
