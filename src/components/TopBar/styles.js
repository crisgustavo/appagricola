import styled from "styled-components";

export const DefaultTopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width: 100%;

    @media(max-width: 800px) {
        padding: 0 5px;
    }
`