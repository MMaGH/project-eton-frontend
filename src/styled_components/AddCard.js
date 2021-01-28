import styled from "styled-components"

export const AddContainer = styled.div`
    width: 50vw;
    height: 50vh;
    position: fixed;
    left: 25vw;
    top: -50vh;
    transition: 500ms;
    &.activated {
        transition: 500ms;
        top: 0;
        box-shadow: 0px 0px 10000px 200px black;
    }
`

export const ShowAddCardButton = styled.div`
    position: absolute;
    height: 30px;
    width: 50vw;
    bottom: -30px;
    background-color: #000000;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 22px;
    font-weight: bold;
    color: #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    cursor: pointer;

`

export const AddCardForm = styled.form`
    width: 100%;
    height: 100%;
    background-color: #282c34;
`

export const AddCardContent = styled.textarea`
    position: absolute;
    background-color: inherit;
    color: inherit;
    bottom: 0.3vh;
    left: 1vw;
    width: 19vw;
    height: 34vh;
    resize: none;
    border: none;
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;
`

export const AddCardTitle = styled.input`
    position: absolute;
    background-color: inherit;
    color: inherit;
    left: 1vw;
    top: 1vh;
    width: 19vw;
    height: auto;
    border: none;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: inherit;
`

export const AddCardSubmit = styled.button`
    position: absolute;
    bottom: 0;
    left: 15px;
    width: 20vw;
    height: auto;
    font-size: 25px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background-color: #00CE00;
    color: white;
    padding: 0;

`

export const AddCardLabel = styled.label`
    position: absolute;
    font-weight: bold;
    font-size: 3vmin;
    left: 0.5vw;
    color: white;
    &.colorLabel{
        top: 2vh;
    };
    &.backgroundLabel {
        top: 8vh;
    }
`

export const ColorInput = styled.input`
    position: absolute;
    right: 0.5vw;
    height: 5vh;
    width: 5vw;
    border: none;
    padding: 0;
    margin: 0;
    &.color {
        top: 2vh;
    };
    &.background {
        top: 8vh;
    }
`


export const Card = styled.div`
    position: absolute;
    left: 1vw;
    top: 2vh;
    border: 5px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px black;
    width: 20vw;
    height: 40vh;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 1vh;
    padding-top: 1vh;
    margin-right: 5vw;
    display: inline-flexbox;
    column-fill: balance;
    background-color: white;
`

export const AddCardSettings = styled.div`
    position: absolute;
    right: 1vw;
    top: 2vh;
    width: 20vw;
    height: 40vh;
    border: 5px solid transparent;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 1vh;
    padding-top: 1vh;
    margin-left: 5vw;

`


