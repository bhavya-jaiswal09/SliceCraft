import axios from "axios";

import { ApiReturnMessage } from "../Types";

const isServer = typeof window === "undefined";
const baseURL = isServer
  ? (process.env.BACKEND_URL || "http://backend:3001/")
  : (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/");

export const api = axios.create({
  baseURL,
});

type ApiResponse<T> = {
  data: T & Partial<ApiReturnMessage>;
  status: number;
};

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message !== "Network Error") {
      return error.response;
    }

    return Promise.reject(error);
  }
);

export const getRequest = async <T>(
  endPoint: string
): Promise<ApiResponse<T>> => {
  const { data, status } = await api.get(endPoint);
  return { data, status };
};

export const postRequest = async <T>(
  endPoint: string,
  body: any
): Promise<ApiResponse<T>> => {
  const { data, status } = await api.post(endPoint, body);
  return { data, status };
};

export const deleteRequest = async (endPoint: string) => {
  const { status } = await api.delete(endPoint);
  return { status };
};

export const putRequest = async (endPoint: string, body: any) => {
  const { data, status } = await api.put(endPoint, body);
  return { data, status };
};

export const patchRequest = async (endPoint: string) => {
  const { data, status } = await api.patch(endPoint);
  return { data, status };
};
