import styled from "styled-components"

export const TopBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 0px transparent;
    border-bottom: 1px solid rgb(90, 90, 90);
    box-shadow: 0px 3px 4px 0px rgb(90, 90, 90);
    position: relative;

    @media(max-width: 900px) {
        height: max-content;
    }
`

export const MenuBar = styled.div `
    padding: 0px 20px;
    display: flex;
    height: 60px;
    align-items: center;

    @media(max-width: 500px) {
        align-items: center;
        padding: 0px 10px;
        height: 30px;
    }
`

export const MenuButton = styled.button `
    background: none;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px black;
    padding: 2px;
    width: max-content;
    cursor: pointer;
`

export const NavigatorContent = styled.div `
    @media(max-width: 800px) {
        height: max-content;
        overflow: visible;
    }
`

export const MenuButtonImg = styled.img `
    width: 50px;

    @media(max-width: 995px) {
        width: 30px;
    }

    @media(max-width: 500px) {
        width: 20px;
    }
`

export const MenuNavigator = styled.nav `

    @media(max-width: 800px) {
        height: max-content;
        padding-left: 10px;
    }
`

export const LogoNewTopBar = styled.img `
    width: 15%;
    margin: -10px 1.5% -10px;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }


    @media(max-width: 850px) {
        width: 20%;
        
    }

    @media(max-width: 500px) {
        width: 25%;
        margin-right: 10px;
        margin: -15px 10% -15px;
    } 
`