import React, { useState } from 'react'

import { Item } from 'features/wordslist/components/Item'
import { useWordContext } from 'hooks/useWordContext'
import { InfiniteScrollGrid } from 'components/InfiniteScrollGrid'

interface Props {}

export function FavoritesList({}: Props) {
  const { favoriteWord } = useWordContext()
  const [favorites] = useState(favoriteWord.getAll())

  return (
    <InfiniteScrollGrid>
      {favorites.map(favorite => (
        <Item
          key={favorite.id}
          data={favorite}
        />
      ))}
    </InfiniteScrollGrid>
  )
}

export default FavoritesList
