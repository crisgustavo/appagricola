import api from '../services/api'



async function GetEmpresaUsuario(user){
    const [userList, cliforList, empresaList] = await Promise.all([
        api.get('/usuarios'),
        api.get('/clifor'),
        api.get('/empresa')
    ]);

    const usuario = userList.data.filter(usuario => usuario.login === user)
    const clifor = cliforList.data.filter(clifor => clifor.idclifor === usuario[0].id_clifor && clifor.nome === usuario[0].nome)
    const empresadata = empresaList.data.filter(empresa => empresa.idempresa === clifor[0].idempresa);

    localStorage.setItem('empresa',empresadata[0].fantasia)
    localStorage.setItem('nome', clifor[0].fantasia)
    localStorage.setItem('idclifor', clifor[0].idclifor)
    localStorage.setItem('idempresa', empresadata[0].idempresa)
}

export default GetEmpresaUsuario