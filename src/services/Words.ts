import { AxiosResponse } from 'axios'
import { localAPI } from 'lib/localAPI'

import { IWord } from 'models/Word'

const serviceURL: string = '/words'

export const Words = {
  getAll({
    params = { _page: 1, _limit: 15 },
  }: {
    params?: { _page: number; _limit?: number }
  }): Promise<AxiosResponse<IWord[]>> {
    return localAPI.get<IWord[]>(serviceURL, { params })
  },
}

export default Words
