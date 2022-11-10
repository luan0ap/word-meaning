import {
  QueryCache,
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

type QueryKeyT = string[] | String[]

export const useFetch = <T>(
  params: UseQueryOptions<AxiosResponse<T>, Error, AxiosResponse<T>, QueryKeyT>
) => {
  return useQuery<AxiosResponse<T>, Error, AxiosResponse<T>, QueryKeyT>({
    ...params,
  })
}

export const useLoadMore = <T>(params: object) => {
  return useInfiniteQuery<AxiosResponse<T>, Error, AxiosResponse<T>>({
    ...params,
    getNextPageParam: (page: any) => page.headers.link.next || false,
  })
}
