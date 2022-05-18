import axios from 'axios'

const api = axios.create({
    baseURL:'https://fake-api-kenzieshop.herokuapp.com'
})

const cepApi = axios.create({
    baseURL:'https://viacep.com.br/ws/'
})
export {api,cepApi}