"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import useUserStore from "@/app/hooks/useUserStore"

const axiosInterceptors = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInterceptors.interceptors.request.use(
  (request) => {
    const token = Cookies.get("access-token");

    if (token) {
      request.headers["rb-token"] = token;
    }
    return request;
  },
  (error) => {
    if (error.response.status === 401) {
      const setUser = useUserStore(state => state.setUser);
      setUser(null);
      Cookies.remove("access-token");
      toast.error("로그인 상태가 만료되었습니다. 다시 로그인해주세요.");
    }
  }
);

export default axiosInterceptors;
