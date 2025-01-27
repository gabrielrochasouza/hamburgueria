import axios from 'axios'

const api = axios.create({
    baseURL:'https://pure-node-crud-application.onrender.com/'
})

const cepApi = axios.create({
    baseURL:'https://viacep.com.br/ws/'
})
export {api,cepApi}
