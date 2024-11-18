import styled from "styled-components";

export const DefaultFooterElements = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: space-between;
    grid-template-areas: 'logo links' '. socialmedia';

    @media(max-width: 850px) {
        font-size: 10px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'logo links' '. socialmedia';
        justify-content: baseline;
    }
`

export const Copyright = styled.p `
    margin-left: 30px;
    color: rgb(192,192,192);
    font-size: 13px;
    font-weight: 200;

    @media(max-width: 850px) {
        font-size: 11px;
        margin-top: -5%;
        margin-left: 15px;
        width: 120%;
        font-weight: 300;
    }
`
