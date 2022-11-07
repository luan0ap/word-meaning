import React, { createContext, ReactNode, useEffect, useState } from 'react'

import useLocalStorage from 'hooks/useLocalStorage.js'
import { Dictionary as DictionaryService } from 'services/Dictionary.js'
import { WordDefinitionResponse } from 'models/WordDefinition'
import { useFetch } from 'hooks/useQuery'

const useFavoriteWord = () => {
  const [storage, setStorage] = useLocalStorage('@word-meaning/favorites')

  return {
    add({ word = '' } = { word: '' }): void {
      setStorage([...storage, word])
    },

    remove({ word = '' } = { word: '' }): void {
      setStorage(storage.filter((w: string) => w !== word))
    },

    has({ word = '' } = { word: '' }): boolean {
      return storage.includes(word)
    },

    getAll(): string[] {
      return storage
    },
  }
}

interface WordsContextInterface {
  favoriteWord: object
  selectedWord: string
  setSelectedWord: React.Dispatch<React.SetStateAction<string>>
  fetchWordDefinitionStatus: 'error' | 'success' | 'loading'
  wordDefinition: WordDefinitionResponse | undefined
}

const WordsContext = createContext({} as WordsContextInterface)

interface Props {
  children: ReactNode
}

const WordsProvider = ({ children }: Props) => {
  const favoriteWord = useFavoriteWord()
  const [selectedWord, setSelectedWord] = useState('')

  const {
    refetch,
    data: wordDefinition,
    status: fetchWordDefinitionStatus,
  } = useFetch<WordDefinitionResponse>({
    queryKey: ['word-definition', selectedWord],
    queryFn: () => DictionaryService.findOne({ word: selectedWord }),
    enabled: false,
  })

  useEffect(() => {
    refetch()
  }, [refetch, selectedWord])

  return (
    <WordsContext.Provider
      value={{
        favoriteWord,
        selectedWord,
        setSelectedWord,
        fetchWordDefinitionStatus,
        wordDefinition,
      }}>
      {children}
    </WordsContext.Provider>
  )
}

export { WordsProvider, WordsContext }
