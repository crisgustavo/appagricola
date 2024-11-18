import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';
import GetEmpresaUsuario from './getEmpresaUsuario';
import Loader from '../components/Loader';


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false)

    const login = async (user, password, navigate) => {
        setLoading(true);
        const passwordEnc = btoa(password);

        try {
            const userList = await api.get('usuarios');
            const usersdata = userList.data;

            const userunique = usersdata.find(
                (item) => item.login === user && item.senha === passwordEnc
            );

            if (userunique) {
                setIsAuthenticated(true);
                await GetEmpresaUsuario(user);
                navigate('/agricola');
            } else {
                alert('Usuário ou senha inválidos. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login', error);
            alert('Erro ao tentar fazer login. Verifique sua conexão.');
        } finally {
            setLoading(false);
        }
    };

    const logout = (navigate) => {
        setIsAuthenticated(false);
        localStorage.removeItem('empresa');
        localStorage.removeItem('nome');
        localStorage.removeItem('idclifor');
        localStorage.removeItem('idempresa')
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            { loading && <Loader />}
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}