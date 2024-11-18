import { useNavigate } from 'react-router-dom'
import { Button } from './styles'

function NoBorderButton({children}) {
    const navigate = useNavigate();

    function getAdress() {
        let address = children

        if (address === 'AGRÍCOLA') {navigate('/agricola/login')}
        if (address === 'LOGIN') {navigate('/area-do-cliente/login')}
    }

    return (
        <Button onClick={() => {getAdress()}}>{children}</Button>
    )
}

export default NoBorderButton