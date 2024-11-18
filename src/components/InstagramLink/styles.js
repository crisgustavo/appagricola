import styled from "styled-components";

export const DefaultInstagramLinkImg = styled.img `
    margin-left: 10px;
    width: 20px;
    filter: grayscale(100);

        &:hover {
            filter: grayscale(0);
        }

    @media(max-width: 800px) {
    width: 15px;
    margin-left: 7px;
    filter: grayscale(0);
}
`