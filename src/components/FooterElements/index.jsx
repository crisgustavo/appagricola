import FooterLinks from "../FooterLinks";
import FooterLogo from "../FooterLogo";
import FooterSocialMedia from "../FooterSocialMedia";
import { Copyright, DefaultFooterElements } from "./styles";

function FooterElements() {
    return (
        <DefaultFooterElements>
            <FooterLogo />
            <FooterLinks />
            <Copyright>Copyright © 2024. Todos os direitos reservados. Desenvolvido por Calory Sistemas</Copyright>
            <FooterSocialMedia/>
        </DefaultFooterElements>
    )
}

export default FooterElements