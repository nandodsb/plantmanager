import axios from 'axios'
import endpoint from '../config/endpoints.config';

const api = axios.create({
  baseURL: 'http://192.168.15.6:3333'
})

export default api