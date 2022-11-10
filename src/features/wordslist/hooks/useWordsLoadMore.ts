import { useLoadMore } from 'hooks/useQuery'
import { IWord } from 'models/Word'
import { Words as WordsService } from 'services/Words'

export const useWordsLoadMore = () => {
  return useLoadMore<IWord[]>({
    queryKey: ['wordslist'],
    queryFn: ({ pageParam = 1 }) =>
      WordsService.getAll({ params: { _page: pageParam, _limit: 100 } }),
  })
}
export default useWordsLoadMore
