import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

type QueryKeyT = string[] | String[]

export const useFetch = <T>(
  params: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
  return useQuery<T, Error, T, QueryKeyT>({
    ...params,
  })
}

export const useLoadMore = <T>(
  params: object
) => {
  let nextPage = 0

  return useInfiniteQuery<T, Error>({
    ...params,
    getNextPageParam: () => ++nextPage,
  })
}
