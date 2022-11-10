import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export function api(axiosDefauls: AxiosRequestConfig) {
  const axiosInstance = axios.create(axiosDefauls)

  return {
    get<TResponse>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<TResponse>> {
      return axiosInstance.get<TResponse>(url, config)
    },

    interceptors: {
      ...axiosInstance.interceptors,
    },
  }
}

export default api
