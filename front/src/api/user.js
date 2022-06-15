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
    .put("/user/user/modify", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// 비밀번호 체크
async function checkUserPasswordAPI(user, success, fail) {
  await axios
    .patch("/user/passwordcheck", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// 비밀번호 변경
function doModifyUserPasswordAPI(user, success, fail) {
  axios
    .put("/user/modify/password", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

// 회원탈퇴
function doDeleteUserAPI(userId, success, fail) {
  axios
    .delete(`/user/delete/${userId}`, JSON.stringify(userId))
    .then(success)
    .catch(fail);
}

// 관심 지역 가져오기
async function setUserInterestAPI(userId, success, fail) {
  await axios.get(`user/interest/list/${userId}`).then(success).catch(fail);
}

// 관심 지역 제거
async function deleteUserInterestAPI(interest, success, fail) {
  await axios
    .patch(`/user/interest/delete`, JSON.stringify(interest))
    .then(success)
    .catch(fail);
}

// 관심 지역 등록
async function insertUserInterestAPI(interest, success, fail) {
  await axios
    .post(`/user/interest/insert`, JSON.stringify(interest))
    .then(success)
    .catch(fail);
}

export {
  doLoginAPI,
  doRegistAPI,
  doModifyUserAPI,
  checkUserPasswordAPI,
  doModifyUserPasswordAPI,
  doDeleteUserAPI,
  setUserInterestAPI,
  deleteUserInterestAPI,
  insertUserInterestAPI,
};
