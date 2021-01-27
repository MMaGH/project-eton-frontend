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
    margin-bottom: 20px;
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
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08)); 
`

export const CardListContainer = styled.div`
    width: 70%;
    min-height: 100vh;
`

export const CardPinButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: red;
    border: 2px solid black;
    transition: 1500ms;
    border-radius: 10px;
    cursor: pointer;
    &.pinned {
        transition: 1500ms;
        background-color: green;
    }
    &.pinned:hover{
        transition: 1500ms;
        background-color: red;
    }
    &:hover {
        transition: 1500ms;
        background-color: green;
    }
`

export const CardCloseButton = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    cursor: pointer;
    text-align: center;
    border-top: 2px solid;
    border-color: inherit;
    font-size: 16px;
    font-weight: bold;
`