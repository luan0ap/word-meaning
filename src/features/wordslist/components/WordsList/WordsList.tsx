import React from 'react'

import useWordsLoadMore from 'features/wordslist/hooks/useWordsLoadMore'
import { Item } from 'features/wordslist/components/Item'
import { useWordContext } from 'hooks/useWordContext'
import { InfiniteScrollGrid } from 'components/InfiniteScrollGrid'

interface Props {}

export function WordsList({}: Props) {
  const { data, fetchNextPage } = useWordsLoadMore()
  const { favoriteWord } = useWordContext()

  return (
    <InfiniteScrollGrid onViewChange={fetchNextPage}>
      {data?.pages.map((page, i) => {
        return (
          <React.Fragment key={i}>
            {page.data.map(word => (
              <Item
                key={word.id}
                data={word}
              />
            ))}
          </React.Fragment>
        )
      })}
    </InfiniteScrollGrid>
  )
}

export default WordsList
