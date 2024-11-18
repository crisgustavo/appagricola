import styled from "styled-components";

export const DefaultFacebookLinkImg = styled.img`
margin-left: 10px;
    width: 20px;
    filter: grayscale(100);

        &:hover {
            filter: grayscale(0);
        }

        @media(max-width: 800px) {
        width: 15px;
        filter: grayscale(0);
    }
`