import { useNavigate } from 'react-router-dom'
import logocontainer from '../../assets/images/logo_facebook.png'
import { DefaultContainerLogo } from './styles'

function ContainerLogo() {
    const navigate = useNavigate();

    return (
        <DefaultContainerLogo src={logocontainer} onClick={() => window.open('http://www.calory.com.br/')}/>
    )
}

export default ContainerLogo