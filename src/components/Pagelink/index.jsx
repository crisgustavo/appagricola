import { DefaultPageLink } from "./styles";


function PageLink({children}) {

        function getAdress() {
            let address = children

            if (address === 'Home') {window.open('http://www.calory.com.br/')}
            if (address === 'Softwares') {window.open('http://www.calory.com.br/softwares', '_blank', 'noopener');}
            if (address === 'Sobre Nós') {window.open('https://calory.com.br/sobre-nos')}
            if (address === 'Contato') {window.open('http://www.calory.com.br/contato')}
            if (address === 'Políticas de Privacidade') {window.open('http://www.calory.com.br/politicas-de-privacidade/politicas-de-privacidade')}
        }

    return (
        <DefaultPageLink onClick={() => {getAdress()}}>{children}</DefaultPageLink>
    )
}

export default PageLink