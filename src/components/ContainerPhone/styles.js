import styled from "styled-components";

export const DefaultContainerPhone = styled.div`
    display: grid;
        img {
            grid-area: img;
            padding: 7px;
            width: 100%;
        };
        h3 {
            grid-area: h3;
            align-self: flex-end;
            justify-self: center;
            padding: 0px 15px;
        };
        p {
            grid-area: p;
            text-align: center;
            z-index: 10;
            padding: 0px 5px 5px;
            font-size: 80%;
        };
    grid-template-areas: 'img h3' 'img p ';
    height: 64px;
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    
        @media(max-width: 800px) {
        img {
            margin-top: 20%;
            width: 75%;
        };
        h3 {
            margin-left: -15%;
            font-size: 90%;
        };
        p {
            font-size: 60%;

            span {
                font-size: 110%;
            }
        };

        div{
            margin-left: -15%;
        }

        }
    
`