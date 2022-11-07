import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { WordsGrid } from 'features/wordslist/components/WordsGrid'

// Create a client
const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WordsGrid />
    </QueryClientProvider>
  )
}

export default App
