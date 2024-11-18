import ContainerLogo from "../ContainerLogo";
import ContainerContact from "../ContainerContact";
import { DefaultContainer } from "./styles";

function Container() {
    return(
        <DefaultContainer>
            <ContainerLogo />
            <ContainerContact />
        </DefaultContainer>
    )
}

export default Container