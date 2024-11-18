import { DefaultInstagramLinkImg } from "./styles";
import instaimage from '../../assets/images/social-media/instagram.png'

function InstagramLink() {
    return (
        <a href='https://www.instagram.com/calorysistemas/' target="blank"><DefaultInstagramLinkImg src={instaimage} /></a>
    )
}

export default InstagramLink