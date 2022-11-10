import api from './api'

export const localAPI = api({
  baseURL: process.env.API_URL || 'http://localhost:4000',
})

const parseLinkHeader = (linkHeader: string) => {
  const linkHeadersArray = linkHeader
    .split(', ')
    .map(header => header.split('; '))

  const linkHeadersMap = linkHeadersArray.map(header => {
    const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
    const thisHeaderUrl = new URL(header[0].slice(1, -1)).searchParams.get(
      '_page'
    )
    return [thisHeaderRel, thisHeaderUrl]
  })

  return Object.fromEntries(linkHeadersMap)
}

localAPI.interceptors.response.use((response: any) => {
  response.headers.link = parseLinkHeader(response.headers.link)
  return response
})

export default localAPI
