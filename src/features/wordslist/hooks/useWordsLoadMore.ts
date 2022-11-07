import { useLoadMore } from 'hooks/useQuery'
import { WordResponse } from 'models/Word'
import { Words as WordsService } from 'services/Words'

export const useWordsLoadMore = () => {
  return useLoadMore<WordResponse[]>({
    queryKey: ['wordslist'],
    queryFn: ({ pageParam = 0 }) => WordsService.getAll({ params: { _page: pageParam } }),
  })
}
export default useWordsLoadMore
