import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_API_URL } from './constants';

export function get<T>(url: string): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${BASE_API_URL}/${url}`);
}

export const post = <T, R>(url: string, body: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.post<R>(`${BASE_API_URL}/${url}`, body, config);
