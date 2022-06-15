import { setNoticesAPI } from "@/api/notice.js";

const noticeStore = {
  namespaced: true,

  state: {},
  getters: {},
  mutations: {},
  actions: {
    // 공지사항 전체 게시글 조회
    setNotices: ({ conmmit }) => {
      setNoticesAPI(
        ({ data }) => {
          conmmit("SET_NOTICE", data);
        },
        error => {
          console.log("error(notice):", error);
        }
      );
    },
  },
};

export default noticeStore;
