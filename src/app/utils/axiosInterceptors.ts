"use client";

import axios from "axios";
import Cookies from "js-cookie";

const axiosInterceptors = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInterceptors.interceptors.request.use((request) => {
  const token = Cookies.get("access_token");
  if (token) {
    request.headers["rb-token"] = token;
  }
  return request;
});

export default axiosInterceptors;
