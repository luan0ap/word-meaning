import { localAPI } from 'lib/localAPI'

import { WordResponse } from 'models/Word.js'

const serviceURL: string = '/words'

export const Words = {
  getAll({ params = { _page: 1, _limit: 15 } }: { params?: { _page: number, _limit?: number } }): Promise<WordResponse[]> {
    return localAPI.get<WordResponse[]>(serviceURL, { params })
  },
}

export default Words
