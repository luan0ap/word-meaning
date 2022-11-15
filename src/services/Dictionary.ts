import { IApiResponse } from 'lib/api'
import { IWord } from 'models/Word'
import { IWordDefinition } from 'models/WordDefinition'

import { dictionaryAPI } from 'lib/dictionaryAPI'

const serviceURL: string = '/entries/en'

export const Dictionary = {
  findOne({
    word = '',
  }: IWord): Promise<IApiResponse<IWordDefinition[]>> {
    return dictionaryAPI.get<IWordDefinition[]>(`${serviceURL}/${word}`)
  },
}

export default Dictionary
