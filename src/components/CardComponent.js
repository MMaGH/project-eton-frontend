import React from 'react'
import {Card, CardHeader, CardContent} from '../styled_components/Card'


export default function CardComponent(props) {

    const style = {
         "background-color": props.card.background,
         "color": props.card.color,
         "borderColor": props.card.color
     }

    return (
        <Card style={style}>
            <CardHeader>{props.card.header}</CardHeader>
            <CardContent>{props.card.content}</CardContent>
        </Card>
    )
}
