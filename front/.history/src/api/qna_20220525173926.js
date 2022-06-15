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

// 댓글 전체
function setAnswersAPI(success, fail) {
  axios.get("/Answer").then(success).catch(fail);
}

// 해당 댓글
async function setDetailAnswerAPI(qnaNo, success, fail) {
  await axios.get(`/Answer/${qnaNo}`).then(success).catch(fail);
}

// 댓글 수정
function modifyAnswerAPI(answer, success, fail) {
  axios
    .put(`/Answer/${answer.qnaNo}`, JSON.stringify(answer))
    .then(success)
    .catch(fail);
}

// 댓글 등록
function registAnswerAPI(answer, success, fail) {
  axios
    .post("/Answer/regist", JSON.stringify(answer))
    .then(success)
    .catch(fail);
}

// 댓글 삭제
function deleteAnswerAPI(qnaNo, success, fail) {
  axios.delete(`/Answer/delete/${qnaNo}`).then(success).catch(fail);
}

export {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
  setAnswersAPI,
  setDetailAnswerAPI,
  modifyAnswerAPI,
  registAnswerAPI,
  deleteAnswerAPI,
};
