import axios, { AxiosRequestConfig } from 'axios';

export function signUp(data: unknown) {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'http://localhost:3000/contact/sign-up',
    data: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
}
