import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://brasilapi.com.br/api/cnpj/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
