import styled from "styled-components";


export const ImgBackgroundFooter = styled.img `
    position: absolute;
    z-index: -1;
    width: 100%;
    bottom: 0;

    @media(max-width: 850px) {
        width: 100%;
    }
`

export const DefaultFooter = styled.div `
    width: 100%;
    display: flex;
`