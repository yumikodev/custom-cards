import axios, { AxiosError } from "axios";
import { baseURL } from "../utils/endpoints.js";

export function createHttpClient(token: string) {
  const api = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  api.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
  );

  api.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
      if (err.response) {
        return Promise.reject(err.response.data);
      }

      return Promise.reject(err);
    }
  );

  return api;
}
