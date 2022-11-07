import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export function api(axiosDefauls: AxiosRequestConfig) {
  const axiosInstance = axios.create(axiosDefauls)

  return {
    get<TResponse>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<TResponse> {
      return axiosInstance
        .get<TResponse>(url, config)
        .then(({ data }: AxiosResponse) => data as TResponse)
    },
  }
}

export default api
