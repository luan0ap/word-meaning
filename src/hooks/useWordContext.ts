import { WordsContext } from 'contexts/Words'

import { useContext } from 'react'

export const useWordContext = () => useContext(WordsContext)

export default useWordContext
