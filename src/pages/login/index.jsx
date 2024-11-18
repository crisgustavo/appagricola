import {
    Background, Login, Header,
    LoginH1, LoginTitle, InputUser,
    Button, LoginHeader, EyeIcon,
    LoginContent, LoginBackground, Footer,
    Password, InputPassword
} from './styles'
import ContainerLogo from '../../components/ContainerLogo'
import FooterElements from '../../components/FooterElements'
import React, { useContext, useState } from 'react'
import { useAuth } from '../../scripts/authContext'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GetNameLogin from '../../scripts/getNameLogin'


function AgricolaLogin() {

    const [ loginTitle, setLoginTitle ] = useState('AGRÍCOLA')

    const navigate = useNavigate();

    const [isShow, setIsShow] = useState(false);

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const { login } = useAuth();

    const handlePassword = () => setIsShow(!isShow)

    const userChange = (event) => {setUser(event.target.value)}
    const passwordChange = (event) => {setPassword(event.target.value)}

    const handleSubmit = (event) => {    
        event.preventDefault();        
        login(user, password, navigate);
    }

    async function importName(user) {
        const name = await GetNameLogin(user)
        
        setLoginTitle(name || 'AGRÍCOLA')
    }

    function enterpress(event){
        if(event.keyCode === 13) handleSubmit
    }


    return (
        <>
            <Background>
                <Header>
                    <ContainerLogo />
                </Header>
                
                    <Login>
                    <LoginBackground >
                        <LoginHeader>
                            <LoginTitle>{loginTitle}</LoginTitle>
                        </LoginHeader>

                        <LoginContent onSubmit={handleSubmit}>
                            <LoginH1>CPF/CNPJ</LoginH1>
                            <InputUser className='user' type='number' placeholder='Digite apenas números' value={user} onChange={userChange} onBlur={() => importName(user) }/>
                            <LoginH1>SENHA</LoginH1>
                            <Password>
                                <InputPassword type={isShow ? 'text' : 'password'} placeholder='Digite sua senha' value={password} onChange={passwordChange} onKeyUp={() => enterpress(event)} />

                                <EyeIcon type='button' onClick={handlePassword}>
                                    {!isShow && <Eye size={18} />}
                                    {isShow && <EyeOff size={18} />}                                    
                                </EyeIcon>
                            </Password>
                            <Button type='submit'>Login</Button>
                        </LoginContent>
                        </LoginBackground>
                    </Login>

                    <Footer>
                        <FooterElements />
                    </Footer>
                
            </Background>
            
            
        </>
    )

    
}

export default AgricolaLogin
