import { DefaultWhatsasppBudget } from "./styles";
import whatsappbudgetimg from '../../assets/images/orçamento-whatsapp.png'

function WhatsappBudget() {
    return (
        <DefaultWhatsasppBudget src={whatsappbudgetimg} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20um%20de%20seus%20softwares', '_blank')}/>
    )
}

export default WhatsappBudget