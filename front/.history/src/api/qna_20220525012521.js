import { axiosInstance } from "@/api";

const axios = axiosInstance();

function setQuestionsAPI(success, fail) {
  axios.get("/qna").then(success).catch(fail);
}

async function setDetailQuestionAPI(qnaNo, success, fail) {
  await axios.get(`/qna/${qnaNo}`).then(success).catch(fail);
}

function modifyQuestionAPI(qna, success, fail) {
  axios
    .put(`/qna/modify/${qna.qnaNo}`, JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

function registQuestionAPI(qna, success, fail) {
  axios.post("/qna/regist", JSON.stringify(qna)).then(success).catch(fail);
}

function deleteQuestionAPI(qnaNo, success, fail) {
  axios.delete(`/qna/delete/${qnaNo}`).then(success).catch(fail);
}

function searchQuestionBySubjectAPI(keyword, success, fail) {
  axios.get(`/qna/search/${keyword}`).then(success).catch(fail);
}

export {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
};
