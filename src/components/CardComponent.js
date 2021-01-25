import React from 'react'
import {Card, CardHeader, CardContent} from '../styled_components/Card'


export default function CardComponent(props) {

    const style = {
         "background-color": props.card.background,
         "color": props.card.color,
         "borderColor": props.card.color
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

    return (
        <Card style={style}>
            <CardHeader>{props.card.header}</CardHeader>
            <CardContent onClick={clickHandler}>{props.card.content}</CardContent>
        </Card>
    )
}
