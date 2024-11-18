import axios from 'axios'

const api = axios.create({
    baseURL: 'https://177.107.115.204:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})


export default api