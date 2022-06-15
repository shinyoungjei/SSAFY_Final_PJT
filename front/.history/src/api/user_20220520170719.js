import { axiosInstance } from "@/api";

const axios = axiosInstance();

async function doLoginAPI(user, success, fail) {
  await axios
    .post("/user/login", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// 회원가입
function doRegistAPI(user, success, fail) {
  axios.post("/user/regist", JSON.stringify(user)).then(success).catch(fail);
}

// 회원정보수정
function doModifyUser(user, success, fail) {
  axios.put("/user/modify", JSON.stringify(user)).then(success).catch(fail);
}

export { doLoginAPI, doRegistAPI };
