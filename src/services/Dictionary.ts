import { dictionaryAPI } from 'lib/dictionaryAPI'

import { WordDefinitionResponse } from 'models/WordDefinition'

const serviceURL: string = '/entries/en'

export const Dictionary = {
  findOne({ word = '' }: { word?: string }): Promise<WordDefinitionResponse> {
    return dictionaryAPI.get<WordDefinitionResponse>(`${serviceURL}/${word}`)
  },
}

export default Dictionary
