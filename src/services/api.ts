import axios from 'axios'
import endpoint from '../config/endpoints.config';

const api = axios.create({
  baseURL: endpoint.BASE_URL
})

export default api