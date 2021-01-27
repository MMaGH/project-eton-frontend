import React from 'react'
import CardList from "./CardList";
import TasksComponent from "./TasksComponent";
import { HomePageContainer, Container } from "../styled_components/HomePage";

export default function HomePage() {
    return (
        <HomePageContainer>
            <Container>
                <TasksComponent/>
            </Container>
            <Container>
                <CardList/>
            </Container>
        </HomePageContainer>
    )
}
