import styled from "styled-components";

export const DefaultHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    @media(max-width: 800px) {
        margin-top: 2%;
    }
`