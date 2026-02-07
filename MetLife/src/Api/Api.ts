import axios from 'axios'

const api = axios.create({
    baseURL: 'https://metlife.onrender.com',
    timeout: 8000,
    timeoutErrorMessage: 'Loading Faileed'
})

export default api;     