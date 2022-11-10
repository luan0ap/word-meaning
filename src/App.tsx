import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ChakraProvider,
  theme,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from '@chakra-ui/react'

import { WordsList } from 'features/wordslist/components/WordsList'
import { FavoritesList } from 'features/wordslist/components/FavoritesList'
import { WordsProvider } from 'contexts/Words'

// Create a client
const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <WordsProvider>
          <Flex
            width="100vw"
            flexDirection={['column', 'row']}
            padding="20px 10px">
            <Box flex="1"></Box>

            <Flex
              flex="1"
              flexDirection="row"
              maxWidth={'50vw'}>
              <Tabs>
                <TabList>
                  <Tab>Word list</Tab>
                  <Tab>Favorites</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <WordsList />
                  </TabPanel>

                  <TabPanel>
                    <FavoritesList />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>
        </WordsProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
