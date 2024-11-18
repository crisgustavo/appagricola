import phoneicon from '../../assets/images/icons/phone.png'
import { DefaultContainerPhone } from './styles'

function ContainerPhone() {
    return (
        <DefaultContainerPhone>
            <img src={phoneicon} alt="" />
            <h3>Atendimento</h3>
            <div>
              <p><span>Celulares</span>
                <br />(44) 99993-9313
                <br />(44) 99927-0531</p>
              <p><span>Fixos</span>
                <br />(44) 3649-4444
                <br />(44) 3636-2883</p>
            </div>
        </DefaultContainerPhone>
    )
}

export default ContainerPhone