import styled from "styled-components";

export const DefaultContainerEmail = styled.div`
    a { text-decoration: none;
        color: #000000;
        display: grid;
            img {
                grid-area: img;
                width: 90%;
            };
            h3 {
                grid-area: h3;
                align-self: flex-end;
                text-align: center;
                width: 100%;
            };
            p {
                grid-area: p;
                width: 100%;
                font-size: 80%;
                text-align: center;
            };
        grid-template-areas: 'img h3' 'img p';
        cursor: pointer;

        &:hover {
            p {
                color: #2000d8;
            }
            img {
                opacity: 50%;
            }
        }
    }

    @media(max-width: 800px) {
            
            img {
                margin-left: 5%;
            }
            h3 {
                font-size: 90%;
            }
            p {
                font-size: 70%;
            }

            margin-left: 1%;
    }
`