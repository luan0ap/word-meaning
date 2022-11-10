import React from 'react'
import { GridItem, GridItemProps } from '@chakra-ui/react'

import { IWord } from 'models/Word'
import useWordContext from 'hooks/useWordContext'

export interface ItemProps extends GridItemProps {
  isFavorite?: boolean
  data: IWord
}

export function Item({
  children,
  isFavorite,
  data,
  borderColor = 'blackAlpha.300',
  ...props
}: ItemProps) {
  const { setSelectedWord } = useWordContext()

  return (
    <GridItem
      borderStyle="solid"
      borderWidth={1}
      borderColor={borderColor}
      textAlign="center"
      cursor="pointer"
      padding={[2, 5]}
      onClick={() => setSelectedWord(data)}
      wordBreak="break-all"
      {...props}>
      {data.word}
    </GridItem>
  )
}

export default Item
