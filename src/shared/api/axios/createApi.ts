import axios, { AxiosInstance } from 'axios';
import { API_URL, REQUEST_TIMEOUT, RapidAPIHeaders } from '../const';

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    ...RapidAPIHeaders
  }
});
