import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IApiResponse<T = any, D = any> extends AxiosResponse<T, D> {}

export function api(axiosDefauls: AxiosRequestConfig) {
  const axiosInstance = axios.create(axiosDefauls)

  return {
    get<TResponse>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<IApiResponse<TResponse>> {
      return axiosInstance.get<TResponse>(url, config)
    },

    interceptors: {
      ...axiosInstance.interceptors,
    },
  }
}

export default api
