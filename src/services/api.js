import axios from 'axios'

const api = axios.create({
  baseURL: "https://yourApi.com"
})

export default api