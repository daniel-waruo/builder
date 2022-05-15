import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

const $http = {
  Authentication: axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTHENTICATION_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),

  Api: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
};

const accessToken = (): string | null => localStorage.getItem('access_token');

const authenticationInterceptor = (config: AxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken()}`;
  return config;
};

$http.Api.interceptors.request.use(authenticationInterceptor);
$http.Api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    message.error({ content: 'Authorization Error' });
  } else if (error.response.status === 403) {
    message.error({ content: 'Authorization Error' });
  } else if (error.response.status === 500) {
    message.error({ content: 'Authorization Error' });
  }
  return Promise.reject(error);
});

export default $http;
