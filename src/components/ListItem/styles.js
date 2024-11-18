import styled from "styled-components";

export const DefaultListItem = styled.li `
    border: none;
    padding: 10px 15px;
    color: navy;
    text-align: center;
    min-width: max-content;
    border-radius: 5px;
    //box-shadow: 2px 2px 5px 2px black;

    &:hover{        
        cursor: pointer;
        transition: 0.5s;
        transition-property: box-shadow;
        box-shadow: 4px 4px 5px 0px gray;
    }
    &:active {
        opacity: .5;
    }

    @media(max-width: 800px) {
        font-size: 50%;
    }

    @media(max-width: 500px){
        font-size: 40%;
        padding: 5px 5px;
    }
`