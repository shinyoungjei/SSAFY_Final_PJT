import { axiosInstance } from "@/api";

const axios = axiosInstance();

function setNoticesAPI(success, fail) {
  axios.get("/notice").then(success).catch(fail);
}
