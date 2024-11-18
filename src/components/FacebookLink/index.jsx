import { DefaultFacebookLinkImg } from './styles'
import fbimage from '../../assets/images/social-media/facebook.png' 

function FacebookLink() {
    return (
        <a href='https://www.facebook.com/calorysistemas' target='blank'><DefaultFacebookLinkImg src={fbimage} /></a> 
    )
}

export default FacebookLink