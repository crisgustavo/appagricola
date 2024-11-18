import styled from "styled-components"

export const DefaultPageContentDescriptionInfo = styled.div `
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 5px;

    @media(max-width: 800px) {
        grid-template-columns: max-content 100%;
    }
`