import styled from "styled-components";

export const TaskContainer = styled.div`
    width: 70vw;
    margin-top: 5vh;
    flex: content;
    transition: 500ms;

`

export const TaskCard = styled.div`
    position: relative;
    min-width: 10vw;
    width: fit-content;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 1vw;
    padding-right: 1vw;
    margin-top: 10vh;
    background-color: white;
    border-radius: 1vh;
    border-top-left-radius: 0;
    text-align: left;
`

export const TaskTitle = styled.h1`
    margin-bottom: 0;
    position: absolute;
    font-size: 3vh;
    left: 0;
    bottom: 100%;
    min-height: 4vh;
    height: fit-content;
    width: fit-content;
    padding-left: 1vw;
    padding-right: 1vw;
    border-top-left-radius: 1vh;
    border-top-right-radius: 1vh;
    text-align: justify;
    background-color: black;
    color: white;
`

export const TaskContent = styled.div`
    position: inherit;
    background-color: rgba(0,0,0,0.1);
    border-radius: 1vh;
    bottom: 0;
    margin: 0.5vw;
    padding: 1vh;

    display: inline-block;
    width: fit-content;
    font-size: 2vh;
    cursor: pointer;
    transition: 500ms;
    &.completed {
        transition: 500ms;
        text-decoration: line-through;
        opacity: 50%;
    }
`

export const TaskCheck = styled.input`
    height: 2vh;
    width: 2vh;
    border: none;

`
