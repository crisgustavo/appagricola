import Container from "../Container";
import HeaderWrap from "../HeaderWrap";
import { DefaultHeader } from "./styles";

function Header() {
    return (
        <DefaultHeader>
            <Container />
            <HeaderWrap />
        </DefaultHeader>
    )
}

export default Header