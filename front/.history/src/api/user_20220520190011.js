import { axiosInstance } from "@/api";

const axios = axiosInstance();

// 로그인
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
function doModifyUserAPI(user, success, fail) {
  axios
    .put(`/user/modify/${user.name}`, JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// 회원탈퇴
function doDeleteUserAPI(userId, success, fail) {
  axios.delete(`/user/delete/${userId}`).then(success).catch(fail);
}
export { doLoginAPI, doRegistAPI, doModifyUserAPI, doDeleteUserAPI };
