import React, { useState, useEffect } from 'react';
import CardComponent from "./CardComponent";
import {CardContainer} from '../styled_components/Card.js'
import data from "../data/data.json";

export default function CardList(props) {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        setCards(data.cards);
    }, props) 

    console.log(props.thing)

    return (
        <CardContainer>
            {cards.map((card) => {
                return (
                    <CardComponent key = {card.id}
                        card={card} />
                );
            })}
        </CardContainer>
    )
}
