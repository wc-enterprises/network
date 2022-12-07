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

export function getAllContacts(data: unknown) {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'http://localhost:3000/contact/get-all-contacts-of-user',
    headers: {
      'Content-Type': 'application/json',
    },
    params: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
}
