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
    background-color: pink;
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
    background-color: lightblue;
    text-align: justify;
`

export const TaskContent = styled.div`
    position: inherit;
    bottom: 0;
    margin-right: 1vw;
    display: inline-block;
    width: fit-content;
    font-size: 2vh;
`

export const TaskCheck = styled.input`
    height: 2vh;
    width: 2vh;
    border: none;

`
