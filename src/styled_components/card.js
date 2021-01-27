import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    margin-top: 5vh;
    columns: 300px;
    flex: content;
    transition: 500ms;
`


export const Card = styled.div`
    position: relative;
    border: 5px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px black;
    max-width: 270px;
    width: auto;
    width: 100%;
    padding: 15px;
    margin: 10px;
    display: inline-flexbox;
    column-fill: balance;
    transition: 500ms;
    white-space: pre-wrap;
    :hover {
        transition: 500ms;
        box-shadow: 5px 5px 50px 1px white ;
    }
`

export const CardContent = styled.div`
    display: inline-flex;
    text-align: justify;
    transition: 500ms;
    width: 100%;
    cursor: pointer;
    &.collapsed {
        transition: 500ms;
        height: 20px;
        overflow: hidden;
    }
`

export const CardHeader = styled.h1`
    border-bottom: inherit;
    font-size: 30px;
    width: 100%;
    margin-top: -10px;
    display: inline-flex;
    text-align: left;
`

export const PinnedContainer = styled.div`
    width: 100%;
    margin-top: 8vh;
    columns: 300px;
    flex: content;
    transition: 500ms;
    padding-bottom: 2vh;
    border-bottom: 1vh solid black;
    border-bottom-left-radius: 3vh;
    border-bottom-right-radius: 3vh;
`

export const CardListContainer = styled.div`
    width: 70%;
    min-height: 100vh;
`

export const CardPinButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    background-color: red;
    cursor: pointer;
`