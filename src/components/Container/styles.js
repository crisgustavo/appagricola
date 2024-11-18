import styled from "styled-components";

export const DefaultContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media(max-width: 800px) {
        flex-direction: column;
    }

`