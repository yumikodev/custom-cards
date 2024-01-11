import axios, { AxiosError } from "axios";
import { baseURL } from "../utils/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
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

export default api;
