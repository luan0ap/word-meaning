import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { QueryStatus } from '@tanstack/react-query'

import { IWordDefinition } from 'models/WordDefinition'
import { IWord } from 'models/Word'
import { IApiResponse } from 'lib/api'

import { Dictionary as DictionaryService } from 'services/Dictionary'

import useLocalStorage from 'hooks/useLocalStorage'
import { useFetch } from 'hooks/useQuery'

const useFavoriteWord = () => {
  const [storage, setStorage] = useLocalStorage('@word-meaning/favorites')

  return {
    add(item: IWord): void {
      setStorage([...storage, item])
    },

    remove({ id }: IWord): void {
      setStorage(storage.filter((saved: IWord) => saved.id !== id))
    },

    has({ id }: IWord): boolean {
      return storage.some((saved: IWord) => saved.id === id)
    },

    getAll(): IWord[] {
      return storage
    },
  }
}

interface WordsContextInterface {
  favoriteWord: {
    add(item: IWord): void
    remove({ id }: IWord): void
    has({ id }: IWord): boolean
    getAll(): IWord[]
  }
  selectedWord: IWord
  setSelectedWord: React.Dispatch<React.SetStateAction<IWord>>
  fetchWordDefinitionStatus: QueryStatus
  wordDefinition: IApiResponse<IWordDefinition[]> | undefined
}

const WordsContext = createContext({} as WordsContextInterface)

interface Props {
  children: ReactNode
}

const WordsProvider = ({ children }: Props) => {
  const favoriteWord = useFavoriteWord()
  const [selectedWord, setSelectedWord] = useState({} as IWord)

  const {
    refetch,
    data: wordDefinition,
    status: fetchWordDefinitionStatus,
  } = useFetch<IWordDefinition[]>({
    queryKey: ['word-definition'],
    queryFn: () => DictionaryService.findOne(selectedWord),
    enabled: false,
  })

  useEffect(() => {
    if (selectedWord) {
      refetch()
    }
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
