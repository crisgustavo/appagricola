import styled from "styled-components";

export const DefaultFooterLogo = styled.img `
    padding: 30px;
    grid-area: logo;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }

    @media(max-width: 850px) {
        width: 100px;
        padding: 30px 15px;
        margin-right: -20px;
    }
`