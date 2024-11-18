import styled from "styled-components";

export const DefaultWhatsasppBudget = styled.img `
    width: 380px;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }

    @media(max-width: 800px) {
        width: 100%;        
    }

`