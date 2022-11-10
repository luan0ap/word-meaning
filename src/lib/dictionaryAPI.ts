import api from './api'

export const dictionaryAPI = api({
  baseURL:
    process.env.DICTIONARY_API_URL || 'https://api.dictionaryapi.dev/api/v2',
})

export default dictionaryAPI
