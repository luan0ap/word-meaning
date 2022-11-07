import api from './api'

export const localAPI = api({
  baseURL: process.env.API_URL || 'http://localhost:4000',
})

export default localAPI
