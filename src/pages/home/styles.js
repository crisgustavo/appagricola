import styled from "styled-components";
import landingbg from '../../assets/images/logo_facebook.png'
import footerbg from '../../assets/images/footer-bg.jpg'
import searchimg from '../../assets/icons/search.png'
import clearimg from '../../assets/icons/clear.png'


export const Page = styled.div `
    height: 100vh;
`

export const Background = styled.div `
    height: 80%;
    width: calc(100vw - 3%);
    background-image: url(${landingbg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px;
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    top: 100px;

    @media(max-width: 800px){
        background-size: 200px;
    }
`

export const Header = styled.div `
    background: linear-gradient(0deg, rgba(51,63,212,1) 0%, rgba(49,49,156,1) 30%, rgba(49,49,156,1) 70%, rgba(51,63,212,1) 100%);
    height: 100px;
    width: 100%;
    border: 2px solid rgba(49,49,156,1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    box-shadow: 2px 3px 10px black;
`

export const UserSettings = styled.div `
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
`

export const UserLogo = styled.img `
    width: 25px;
`

export const UserName = styled.label `
    color: #ffffff;
    font-weight: 500;
    align-self: center;
`

export const CompanyLogo = styled.img `
    width: 25px;
`

export const CompanyName = styled.label `
    color: #ffffff;
    font-weight: 500;
    align-self: center;
`

export const Exit = styled.button `
    background: linear-gradient(0deg, rgba(212,51,51,1) 0%, rgba(156,49,49,1) 70%, rgba(212,51,51,1) 100%);
    font-size: 30px;
    color: #ffffff;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 25px;
    box-shadow: 2px 2px 10px black;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`

export const Body = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
`

export const Panel = styled.div `
    display: flex;
    gap: 5px;
`

export const Incoming = styled.button `
    background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Output = styled.button `
background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Stock = styled.button `
    background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Print = styled.button `
    display: flex;
    background: linear-gradient(0deg, rgba(180,180,180,1) 0%, rgba(232,231,231,1) 100%);
    width: 40px;
    padding: 5px 10px;
    border: 1px solid rgba(143,143,143,1);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px black;
    margin-left: 80px;

    img{
        width: 20px;
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    @media(max-width: 800px) {
        margin-left: 20px;
    }
`

export const IncomingPanel = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0px;
    background-color: rgb(222,222,222);
    box-shadow: 2px 2px 10px black;
    width: 98%;

`

export const HeaderIncoming = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IncomingTable = styled.div `
    width: 98%;
    padding: 10px 10px;
    align-self: center;

`

export const PageH1 = styled.h1 `
    align-self: center;
    text-align: center;
    margin-top: 10px;
    color: rgba(36,34,193,1);
    font-size: 23px;
    font-weight: 800;
`

export const IncomingFilter = styled.div `
    display: flex;
    width: 100%;
    gap: 15px;
    margin-top: 5px;
    justify-content: center;

    @media(max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        padding: 0px 35px;
    }
`

export const FilterH1 = styled.h1 `
    font-size: 18px;
    align-self: center;
`

export const ProductSelect = styled.select `
    width: max-content;
    height: 20px;
    align-self: center;
    border: 1px solid black;
    border-radius: 4px;
`

export const YearSelect = styled.select `
    width: max-content;
    height: 20x;
    align-self: center;
    border: 1px solid black;
    border-radius: 4px;
`

export const MeasureSelect = styled.select `
    width: max-content;
    height: 20px;
    align-self: center;
    border: 1px solid black;
    border-radius: 4px;
`

export const Period = styled.button `
    border: none;
    padding: 2px 10px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    background-color: transparent;
    background-size: 20px 20px;
    border: 1px solid rgb(90,90,90);
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 5px 0.5px rgb(90,90,90);
`

export const PeriodPanel = styled.div `
    display: flex;
    gap: 10px;
`

export const StartPeriod = styled.input `
    height: 20px;
    width: 100px;
    align-self: center;
    border: 1px solid black;
    border-radius: 4px;
`

export const FinalPeriod = styled.input `
    height: 20px;
    width: 100px;
    align-self: center;
    border: 1px solid black;
    border-radius: 4px;
`

export const Search = styled.button `
    width: 25px;
    height: 25px;
    align-self: center;
    background-image: url(${searchimg});
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    background-size: 20px 20px;
    border: 1px solid rgb(90,90,90);
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 5px 0.5px rgb(90,90,90);
`

export const Clear = styled.button `
    width: 25px;
    height: 25px;
    align-self: center;
    background-image: url(${clearimg});
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    background-size: 20px 20px;
    border: 1px solid rgb(90,90,90);
    border-radius: 10px;
    box-shadow: 0.5px 0.5px 5px 0.5px rgb(90,90,90);
`

export const OutputPanel = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0px;
    background-color: rgb(222,222,222);
    box-shadow: 2px 2px 10px black;
    width: 98%;
`

export const HeaderOutput = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OutputFilter = styled.div `
    display: flex;
    width: 100%;
    gap: 15px;
    margin-top: 5px;
    justify-content: center;

    @media(max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        padding: 0px 35px;
    }
`

export const OutputTable = styled.div `
    width: 98%;
    padding: 10px 10px;
    align-self: center;
`

export const StockPanel = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0px;
    background-color: rgb(222,222,222);
    box-shadow: 2px 2px 10px black;
    width: 98%;
`

export const HeaderStock = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StockFilter = styled.div `
    display: flex;
    width: 100%;
    gap: 15px;
    margin-top: 5px;
    justify-content: center;

    @media(max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        padding: 0px 35px;
    }
`

export const StockTable = styled.div `
    width: 98%;
    padding: 10px 10px;
    align-self: center;
`

export const Table = styled.table `
    display: flex;
    flex-direction: column;
    height: 360px;
    overflow: hidden;

`