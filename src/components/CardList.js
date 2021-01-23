import React, { useState, useEffect } from 'react';
import CardComponent from "./CardComponent";
import {CardContainer} from '../styled_components/Card.js'
import getDatahandler from "../service/Datahandler";

export default function CardList(props) {
    const [cards, setCards] = useState([]);
    const datahandler = getDatahandler();

    useEffect(() => {
        setCards(datahandler.getAllNotes((data) => props.setRefresh(data)));
    }, [props.refresh, datahandler]) 

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
