import { axiosInstance } from "@/api";

const axios = axiosInstance();

// 공지사항 전체 목록
function setNoticesAPI(success, fail) {
  axios.get("/notice").then(success).catch(fail);
}

// 공지사항 상세 목록
async function setDetailNoticeAPI(noticeNo, success, fail) {
  await axios.get(`/notice/${noticeNo}`).then(success).catch(fail);
}

// 공지사항 수정
function modifyNoticeAPI(notice, success, fail) {
  axios
    .put(`/notice/modify/${notice.noticeNo}`, JSON.stringify(notice))
    .then(success)
    .catch(fail);
}

// 공지사항 등록
function registNoticeAPI(notice, success, fail) {
  axios
    .post("/notice/regist", JSON.stringify(notice))
    .then(success)
    .catch(fail);
}

// 공지사항 삭제
function deleteNoticeAPI(noticeNo, success, fail) {
  axios.delete(`/notice/delete/${noticeNo}`).then(success).catch(fail);
}

// 공지사항 검색
function searchNoticeBySubjectAPI(keyword, success, fail) {
  axios.get(`/notice/search/${keyword}`).then(success).catch(fail);
}

export {
  setNoticesAPI,
  setDetailNoticeAPI,
  modifyNoticeAPI,
  registNoticeAPI,
  deleteNoticeAPI,
  searchNoticeBySubjectAPI,
};
