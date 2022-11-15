import React, { useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

import useWordContext from 'hooks/useWordContext'

interface Props extends BoxProps {
  children: React.ReactNode
}

export function Meaning({ ...props }: Props) {
  const { wordDefinition = { data: [] } } = useWordContext()
  const [word] = wordDefinition.data

  return (
    <Box {...props}>
      {word.meanings.map(meaning => {
        return meaning.partOfSpeech
      })}
    </Box>
  )
}

export default Meaning
