import React, { useState } from 'react'

import { Item } from 'features/wordslist/components/Item'
import { InfiniteScrollGrid } from 'components/InfiniteScrollGrid'
import { useWordContext } from 'hooks/useWordContext'

export function FavoritesList() {
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
