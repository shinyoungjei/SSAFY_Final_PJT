import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import qnaStore from "@/store/modules/qnaStore.js";
import userStore from "@/store/modules/userStore.js";
import aptStore from "@/store/modules/aptStore.js";
import noticeStore from "@/store/modules/noticeStore.js";

const store = new Vuex.Store({
  modules: {
    qnaStore,
    userStore,
    aptStore,
    noticeStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});

export default store;
