import api from '../services/api'

async function GetNameLogin(user) {
    const userList = await api.get('/usuarios');
    const usersdata = userList.data

    let userName = ''
    const userNameFilter = usersdata.filter(item => {
        if (item.login === user){
            userName = item.nome
        }
    })
    
    return userName
}

export default GetNameLogin