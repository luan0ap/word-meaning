import React, { useEffect } from 'react'

import { SimpleGrid, Box } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import useWordsLoadMore from 'features/wordslist/hooks/useWordsLoadMore'
import { WordResponse } from 'models/Word'


interface Props {
  
}

export function WordsGrid({} : Props) {
  const { data, fetchNextPage } = useWordsLoadMore()
  const { inView } = useInView();

  useEffect(() => {
    fetchNextPage()
  }, [fetchNextPage, inView])

  const fn = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    fetchNextPage()
  }

  return (
    <SimpleGrid
      columns={[1, 4]}
      spacing={1}
    >
      {
        data?.pages.map((page, i) => {
          return (
            <React.Fragment key={i}>
              {
                page.map(({ word, id }) => (
                  <React.Fragment key={id}>
                    <Box bgColor='red'>
                      {word}
                    </Box>
                  </React.Fragment>
                ))
              }
            </React.Fragment>
          )
        })
      }

      <button onClick={fn}>ME CLIQUE</button>
    </SimpleGrid>
  )
}

export default WordsGrid
