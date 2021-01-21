import styled from "styled-components"

export const AddContainer = styled.div`
    background-color: white;
    width: 50vw;
    height: 50vh;
    position: fixed;
    left: 25vw;
    top: -50vh;
    transition: 500ms;
    box-shadow: 5px 5px black;
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
    background-color: #FE652F;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 22px;
    font-weight: bold;
    color: white;
    box-shadow: 5px 5px black;

`
