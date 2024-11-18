import styled from "styled-components"

export const DefaultFooterSocialMedia = styled.div `
    display: flex;
    gap: 10px;
    justify-content: end;
    margin-right: 30px;
    grid-area: socialmedia;
    filter: grayscale(1);

    img {
        width: 30px;

        &:hover {
            opacity: .7;
        }

        &:active {
            opacity: .5;
        }
    }

    @media(max-width: 850px) {
        margin-right: 15px;

        img {
            width: 20px;
        }
    }
`