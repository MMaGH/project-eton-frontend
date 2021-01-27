import React, { useState, useEffect } from 'react';
import CardComponent from "./CardComponent";
import {CardContainer} from '../styled_components/Card.js'
import getDatahandler from "../service/Datahandler";
import AddCard from "./AddCard"

export default function CardList(props) {
    const [cards, setCards] = useState([]);
    const [refresh, setRefresh] = useState("")
    const datahandler = getDatahandler();

    useEffect(() => {
        setCards(datahandler.getAllNotes((data) => setRefresh(data)));
    }, [refresh, datahandler]) 

    if (props.addCard) {
        return (
            <CardContainer>
                {cards.map((card) => {
                    return (
                        <CardComponent key = {card.id}
                        card={card} />
                        );
                    })}
                    <AddCard 
                    setRefresh = {setRefresh}
                    />
            </CardContainer>
        )
    } else {
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
}
