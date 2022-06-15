import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
  },
  getters: {},
  mutations: {
    SET_QUESTION(state, payload) {
      state.questions = payload;
    },

    REGIST_QUESTIONS(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
    setQuestions(context) {
      axios.get("http://localhost:8080/webex/book").then(({ data }) => {
        context.commit("SET_QUESTION", data);
      });
    },

    registQuestions(context, registq) {
      axios
        .post("http://localhost:8080/webex/book", registq)
        .then(({ data }) => {
          context.commit("REGIST_QUESTIONS", data);
        });
    },
  },
  modules: {},
});
