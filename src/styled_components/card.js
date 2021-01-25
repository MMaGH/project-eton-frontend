import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 70vw;
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
