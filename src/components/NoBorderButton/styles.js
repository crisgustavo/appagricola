import styled from 'styled-components'

export const Button = styled.button `
    border: none;
    padding: 6px;
    background-color: none;
    background: none;
    font-weight: 500;
    font-size: 15px;
    color: rgb(92, 92, 92);

        &:hover{
            color: black;
            background-color: rgb(245, 245, 245);
        }

    @media(max-width: 800px) {
        font-size: 12px;
    }
`