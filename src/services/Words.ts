import { IApiResponse } from 'lib/api'
import { IWord } from 'models/Word'

import { localAPI } from 'lib/localAPI'

const serviceURL: string = '/words'

export const Words = {
  getAll({
    params = { _page: 1, _limit: 15 },
  }: {
    params?: { _page: number; _limit?: number }
  }): Promise<IApiResponse<IWord[]>> {
    return localAPI.get<IWord[]>(serviceURL, { params })
  },
}

export default Words
