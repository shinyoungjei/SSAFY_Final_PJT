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
  },
  actions: {
    setQuestion(context) {
      axios.get("http://localhost:8080/webex/book").then(({ data }) => {
        context.commit("SET_QUESTION", data);
      });
    },
  },
  modules: {},
});
