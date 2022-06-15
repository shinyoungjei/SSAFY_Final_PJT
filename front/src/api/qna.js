import { axiosInstance } from "@/api";

const axios = axiosInstance();

function setQuestionsAPI(success, fail) {
  axios.get("/qna").then(success).catch(fail);
}

async function setDetailQuestionAPI(qnaNo, success, fail) {
  await axios.get(`/qna/${qnaNo}`).then(success).catch(fail);
}

async function modifyQuestionAPI(qna, success, fail) {
  await axios
    .put(`/qna/modify/${qna.qnaNo}`, JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

async function registQuestionAPI(qna, success, fail) {
  await axios
    .post("/qna/regist", JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

async function deleteQuestionAPI(qnaNo, success, fail) {
  await axios.delete(`/qna/delete/${qnaNo}`).then(success).catch(fail);
}

function searchQuestionBySubjectAPI(keyword, success, fail) {
  axios.get(`/qna/search/${keyword}`).then(success).catch(fail);
}

// answer
function setAllQnAAnswerListAPI(qnaNo, success, fail) {
  axios.get(`/qna/answer/${qnaNo}`).then(success).catch(fail);
}

async function registQnAAnswerAPI(qna, success, fail) {
  await axios
    .post("/qna/answer/regist", JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

async function deleteQnAAnswerAPI(qna, success, fail) {
  await axios
    .patch(`/qna/answer/delete`, JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

async function modifyQnAAnwserAPI(qna, success, fail) {
  await axios
    .put(`/qna/answer/modify`, JSON.stringify(qna))
    .then(success)
    .catch(fail);
}

export {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
  setAllQnAAnswerListAPI,
  registQnAAnswerAPI,
  deleteQnAAnswerAPI,
  modifyQnAAnwserAPI,
};
