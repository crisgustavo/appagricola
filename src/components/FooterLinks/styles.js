import styled from "styled-components";

export const DefaultFooterLinks = styled.ul `
    display: flex;
    justify-content: right;
    gap: 10px;
    margin-right: 30px;
    grid-area: links;

    @media(max-width: 850px) {
        font-size: 11px;
        gap: 10px;
        width: max-content;
        margin-right: 15px;
        display: grid;
        grid-template-columns: max-content max-content;
        justify-items: right;
    }
`