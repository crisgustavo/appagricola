import LeftLinks from "../LeftLinks";
import SocialLinks from "../SocialLinks";
import { DefaultTopBar } from "./styles";

function TopBar() {
    return (
        <DefaultTopBar>
            <LeftLinks />
            <SocialLinks />
        </DefaultTopBar>
    )
}

export default TopBar