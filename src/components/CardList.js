import React, { useState, useEffect } from 'react';
import CardComponent from "./CardComponent";
import { CardContainer, PinnedContainer,CardListContainer } from '../styled_components/Card.js'
import getDatahandler from "../service/Datahandler";
import AddCard from "./AddCard"

export default function CardList(props) {
    const [cards, setCards] = useState([]);
    const [refresh, setRefresh] = useState("")
    const datahandler = getDatahandler();

    useEffect(() => {
        setCards(datahandler.getAllNotes((data) => setRefresh(data)));
    }, [refresh, datahandler])

    return (
        <CardListContainer>
        <PinnedContainer>
        {cards.map((card) => {
                if (card.pinned) {
                    return (
                        <CardComponent key = {card.id}
                        card = {card}
                        setRefresh = {setRefresh}
                        datahandler = {datahandler}/>
                        );
                } else {
                    return "";
                }
                })}
        </PinnedContainer>
        <CardContainer>
            {cards.map((card) => {
                if (!card.pinned) {
                    return (
                        <CardComponent key = {card.id}
                        card = {card} 
                        setRefresh = {setRefresh}
                        datahandler = {datahandler}/>
                        );
                } else {
                    return "";
                }
                })}
        </CardContainer>
            <AddCard 
                setRefresh = {setRefresh}
            />
        </CardListContainer>
    )
}
