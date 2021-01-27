import React from 'react'
import {Card, CardHeader, CardContent, CardPinButton} from '../styled_components/Card'


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
        let target = event.target;
        if (target.classList.contains("collapsed")) {
            target.classList.remove("collapsed");
        } else {
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
        <Card style={style}>
            <CardPinButton onClick={pinHandler}/>
            <CardHeader>{card.header}</CardHeader>
            <CardContent onClick={clickHandler}>{card.content}</CardContent>
        </Card>
    )
}
