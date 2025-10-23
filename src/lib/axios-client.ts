import { isValidHttpUrl } from "@/utils/isValidHttpUrl";
import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const API_MODE = process.env.NEXT_PUBLIC_API_MODE;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_STATUS_CODE = {
  SUCCESS: "0",
  ERROR: "1",
} as const;

const getBaseURL = () => {
  return API_BASE_URL;
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const setAuthToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const unsetAuthToken = () => {
  if (axiosInstance.defaults.headers.common["Authorization"]) {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const onRequest = async (config: InternalAxiosRequestConfig) => {
  const url = config.url;

  if (API_MODE === "mock") {
    delete config.headers.Authorization;
    return config;
  }

  const canAddToken =
    !isValidHttpUrl(url) ||
    (isValidHttpUrl(url) && !!API_BASE_URL && url?.startsWith(API_BASE_URL));

  if (!canAddToken) {
    delete config.headers.Authorization;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export { axiosInstance, setAuthToken, unsetAuthToken };
