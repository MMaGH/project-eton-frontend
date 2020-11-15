import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid red;
    max-width: 280px;
    width: auto;
    width: 100%;
    padding: 5%;
    display: inline-flexbox;
    column-fill: balance;
`

const CardContainer = styled.div`
    width: 70vw;
    border: 1px solid black;
    columns: 300px;
    flex: content;
    
`

export {Card, CardContainer};