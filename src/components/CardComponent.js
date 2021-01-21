import React from 'react'
import {Card, CardHeader, CardContent} from '../styled_components/card'


export default function CardComponent(props) {

    const style = {
         "background-color": props.card.background,
         "color": props.card.color,
         "border-color": props.card.color
     }

    return (
        <Card style={style}>
            <CardHeader>{props.card.header}</CardHeader>
            <CardContent>{props.card.content}</CardContent>
        </Card>
    )
}
