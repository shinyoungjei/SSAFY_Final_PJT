import axios from "axios";
import { API_BASE_URL } from "@/config";

// axios 객체 생성
function axiosInstance() {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // console.log(config);
      //서버에 요청 보낼 헤더에 토큰 정보 추가
      config.headers["access-token"] = sessionStorage.getItem("access-token");
      //config.headers["Content-type"] = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

export { axiosInstance };
