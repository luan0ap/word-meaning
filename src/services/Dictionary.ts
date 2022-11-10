import { AxiosResponse } from 'axios'
import { dictionaryAPI } from 'lib/dictionaryAPI'
import { IWord } from 'models/Word'

import { IWordDefinition } from 'models/WordDefinition'

const serviceURL: string = '/entries/en'

export const Dictionary = {
  findOne({ word = '' }: IWord): Promise<AxiosResponse<IWordDefinition[]>> {
    return dictionaryAPI.get<IWordDefinition[]>(`${serviceURL}/${word}`)
  },
}

export default Dictionary
