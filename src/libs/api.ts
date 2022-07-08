import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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

// 받아올 때 인터셉트
// 성공 시
function responseFulfilledInterceptor(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  return Promise.reject(res.data);
}

// 실패 시
function responseRejectedInterceptor(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(responseFulfilledInterceptor, responseRejectedInterceptor);
