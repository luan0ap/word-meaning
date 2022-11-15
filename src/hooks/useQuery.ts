import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

import { IApiResponse } from 'lib/api'

type QueryKeyT = string[]

export const useFetch = <T>(
  params: UseQueryOptions<IApiResponse<T>, Error, IApiResponse<T>, QueryKeyT>
) => {
  return useQuery<IApiResponse<T>, Error, IApiResponse<T>, QueryKeyT>({
    ...params,
  })
}

export const useLoadMore = <T>(params: object) => {
  return useInfiniteQuery<IApiResponse<T>, Error, IApiResponse<T>>({
    ...params,
    getNextPageParam: (page: any) => page.headers.link.next || false,
  })
}
