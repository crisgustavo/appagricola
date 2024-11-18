import FacebookLink from "../FacebookLink";
import InstagramLink from "../InstagramLink";
import { DefaultSocialLinks } from "./styles";

function SocialLinks() {
    return (
        <DefaultSocialLinks>
            <FacebookLink />
            <InstagramLink />
        </DefaultSocialLinks>
    )
}

export default SocialLinks