import ContainerEmail from "../ContainerEmail";
import ContainerPhone from "../ContainerPhone";
import { DefaultContainerContact } from "./styles";

function ContainerContact() {
    return(
        <DefaultContainerContact>
            <ContainerEmail />
            <ContainerPhone />
        </DefaultContainerContact>
    )
}

export default ContainerContact