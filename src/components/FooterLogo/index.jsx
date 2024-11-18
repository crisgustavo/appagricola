import { DefaultFooterLogo } from "./styles";
import footerlogo from '../../assets/images/footer-logo.png'

function FooterLogo() {
    return (
        <DefaultFooterLogo src={footerlogo} onClick={() => window.open('http://www.calory.com.br/')}/>
    )
}

export default FooterLogo