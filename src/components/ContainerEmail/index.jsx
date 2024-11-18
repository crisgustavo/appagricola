import emailicon from '../../assets/images/icons/email.png'
import { DefaultContainerEmail } from './styles'

function ContainerEmail() {
    return (
        <DefaultContainerEmail>
            <a href="mailto:atendimento@calory.com.br?subject=Contato sobre o website">
                <img src={emailicon} alt="" />
                <h3>Envie-nos um e-mail</h3>
                <p>atendimento@calory.com.br</p>
            </a>
        </DefaultContainerEmail>
    )
}

export default ContainerEmail