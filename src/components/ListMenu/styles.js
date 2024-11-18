import styled from "styled-components";

export const DefaultListMenu = styled.ul `
    list-style: none;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    color: rgb(92, 92, 92);

    @media(max-width: 995px) {
        font-size: 80%;
        gap: 0px;
        justify-content: center;
        align-items: flex-start;
    }

    @media(max-width: 800px) {
        display: grid;
        grid-template-columns: max-content;
        font-size: 135%;
        height: max-content;
        overflow: visible;
    }

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        font-size: 135%;
        height: max-content;
        overflow: visible;
        margin-left: -5%;
    }
`