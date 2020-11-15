import styled from 'styled-components';

const CardContainer = styled.div`
    width: 70vw;
    border: 1px solid black;
    columns: 300px;
    flex: content;
    
`


const Card = styled.div`
    border: 5px solid red;
    border-radius: 10px;
    box-shadow: 5px 5px black;
    max-width: 270px;
    width: auto;
    width: 100%;
    padding: 5%;
    margin: 10px;
    display: inline-flexbox;
    column-fill: balance;
`

const CardHeader = styled.h1`
    border-bottom: inherit;
    font-size: 130%;
    width: 100%;
    margin-top: -10%;
    display: inline-flex;
`

export {Card, CardContainer, CardHeader};