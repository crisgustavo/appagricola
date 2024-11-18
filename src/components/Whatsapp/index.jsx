import whatsappicon from '../../assets/images/icons/whatsapp.png'
import { DefaultWhatsapp } from './styles'

function Whatsapp() {
    return (
        <DefaultWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
    )
}

export default Whatsapp