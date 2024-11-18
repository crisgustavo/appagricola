import FooterElements from "../FooterElements";
import { DefaultFooter, ImgBackgroundFooter } from "./styles";
import footerbackground from '../../assets/images/footer-bg.jpg'

function Footer() {
    return (
        <DefaultFooter>
            <ImgBackgroundFooter src={footerbackground} alt="" />
            <FooterElements />
        </DefaultFooter>
    )
}

export default Footer