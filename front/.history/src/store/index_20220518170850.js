import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    question: null,
  },

  getters: {},

  mutations: {
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },

    SET_DETAIL_QUESION(state, payload) {
      state.question = payload;
    },

    SELECT_QUESTION(state, selectItem) {
      state.questions = selectItem;
    },

    // MODIFY_QUESTION(state, isSuccess, modifiedQna) {
    //   if (isSuccess === "success") {
    //     state.questions = state.questions.map((qna) => {
    //       if (qna.qnaNo == modifiedQna.qnaNo) {
    //         return modifiedQna;
    //       }
    //       return qna;
    //     });
    //   } else {
    //     alert("수정 실패!");
    //   }
    // },

    // REGIST_QUESTION(state, isSuccess, newQna) {
    //   if (isSuccess == "success") {
    //     state.questions.push(newQna);
    //   } else {
    //     alert("등록 실패");
    //   }
    // },

    // DELETE_QUESTION(state, isSuccess, deleteQnaNo) {
    //   if (isSuccess == "success") {
    //     const target = state.questions.map((qna) => {
    //       if (qna.qnaNo == deleteQnaNo) {
    //         return qna;
    //       }
    //     });
    //     state.questions.pop(target);
    //   } else {
    //     alert("삭제 실패!");
    //   }
    // },
  },

  actions: {
    setQuestions({ commit }) {
      axios.get("/qna").then(({ data }) => {
        commit("SET_QUESTIONS", data);
      });
    },

    async setDetailQuestion({ commit }, qnaNo) {
      const { data } = await axios.get(`/qna/${qnaNo}`);
      commit("SET_DETAIL_QUESION", data);
    },

    modifyQuestion(context, qna) {
      axios.put(`/qna/modify/${qna.qnaNo}`, qna).then(({ data }) => {
        console.log(data);
        // commit("MODIFY_QUESTION", data, qna);
      });
    },

    registQuestion(context, qna) {
      axios.post("/qna/regist", qna).then(({ data }) => {
        console.log(data);
        // commit("REGIST_QUESTION", data, qna);
      });
    },

    deleteQuestion(context, qnaNo) {
      axios.delete(`/qna/delete/${qnaNo}`).then(({ data }) => {
        console.log(data);
        //commit("DELETE_QUESTION", data, qnaNo);
      });
    },

    selectQuestion({ commit }, selectItem) {
      const params = { subject: selectItem };
      axios.get(`/qna`, { params }).then(({ data }) => {
        commit("SELECT_QUESTION", data);
      });
    },
  },

  modules: {},
});
