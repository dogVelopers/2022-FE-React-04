import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/app5AO0SumKR9cNKp',
});

// 요청할 때 인터셉트

function requestInterceptor(config: AxiosRequestConfig) {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
}

instance.interceptors.request.use(requestInterceptor);
