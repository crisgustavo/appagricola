import { useNavigate } from 'react-router-dom'


import ListItem from "../ListItem";
import { DefaultListMenu } from "./styles";


function ListMenu() {

    const navigate = useNavigate();


    return (
        <DefaultListMenu>
            <ListItem>
                HOME
            </ListItem>
            <ListItem>
                SOFTWARES
            </ListItem>
            <ListItem>
                ANTIVÍRUS
            </ListItem>
            <ListItem>
                CERTIFICADOS DIGITAIS
            </ListItem>
            <ListItem>
                CONTATO
            </ListItem>
            {/*<ListItem>
                EXPERIMENTE GRÁTIS!
            </ListItem>*/}
        </DefaultListMenu>
    )
}

export default ListMenu