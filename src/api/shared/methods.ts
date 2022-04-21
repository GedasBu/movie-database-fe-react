import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_API_URL, TOKEN_KEY } from './constants';

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${BASE_API_URL}/${url}`, config);
}

export const post = <T, R>(url: string, body: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.post<R>(`${BASE_API_URL}/${url}`, body, config);

export const getSecurityHeaders = (): AxiosRequestConfig => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  },
});

export function del<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.delete<T>(`${BASE_API_URL}/${url}`, config);
}
