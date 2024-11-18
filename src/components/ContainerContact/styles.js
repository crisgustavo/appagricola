import styled from "styled-components";

export const DefaultContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -2%;

    @media(max-width: 800px) {
        flex-direction: row;
        margin-top: 4%;
        align-items: center;
    }
`