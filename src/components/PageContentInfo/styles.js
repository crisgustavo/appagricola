import styled from "styled-components";

export const DefaultPageContentInfo = styled.div `
    width: 100%;
    padding: 10px 30px;
    display: flex;
    gap: 20px;

    @media(max-width: 800px) {
        flex-direction: column ;
    }
`