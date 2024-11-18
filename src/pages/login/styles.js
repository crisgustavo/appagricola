import styled from "styled-components";
import agricola from '../../assets/midias/bg.jpg';
import footerbg from '../../assets/images/footer-bg.jpg';

const FlexCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const Background = styled.div`
    background-image: url(${agricola});
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
`;

export const Header = styled(FlexCenter)`
    position: absolute;
    top: 12%;
    width: 100%;
    justify-content: center;
`;

export const LoginBackground = styled.div`
    background-color: rgba(212,212,212,0.85);
    width: 450px;
    background-size: cover;
    border-radius: 15px;
    align-self: center;
`;

export const Login = styled.div`
    width: 450px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border: 2px solid #000cb1;
    border-radius: 15px;
    overflow: hidden;
    align-self: center;
    margin: 20px 0px 0px 0px;
`;

export const LoginHeader = styled(FlexCenter)`
    justify-content: center;
    background-color: rgb(142,142,192);
    padding: 10px 5px;
    border-radius: 12px;
`;

export const LoginTitle = styled.h1`
    text-align: center;
    color: #000cb1;
`;

export const LoginContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 20px;
`;

export const LoginH1 = styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: rgb(22,22,22);
`;

export const InputUser = styled.input`
    font-size: 20px;
    border: 1px solid #000cb1;
    border-radius: 5px;
    padding: 2px 5px;
    opacity: 0.8;
    text-align: center;
`;

export const Password = styled(FlexCenter)`
    align-items: center;
`;

export const InputPassword = styled(InputUser)`
    margin-left: 5%;
`;

export const EyeIcon = styled.button`
    width: 25px;
    border: none;
    background-color: transparent;
    margin-left: 5px;

    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.5;
    }
`;

export const Button = styled.button`
    font-size: 28px;
    border: 1px #ffffff;
    border-radius: 25px;
    padding: 5px 15px;
    background: linear-gradient(180deg, #cccccc 0%, #5a5a5a 100%);
    color: #000000;
    text-align: center;
    min-width: max-content;
    margin-top: 15px;
    opacity: 1;

    &:hover {
        background: linear-gradient(180deg, #3B82D2 0%, #2000d8 100%);
        cursor: pointer;
        transition: 0.5s font-size;
        color: #ffffff;
        box-shadow: 2px 2px 6px 2px black;
    }
    &:active {
        box-shadow: 1px 1px 3px 1px black;
    }
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    background-image: url(${footerbg});
    width: 100%;
    height: 118px;
`;