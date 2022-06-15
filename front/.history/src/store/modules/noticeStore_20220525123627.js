import {
  setNoticesAPI,
  setDetailNoticeAPI,
  modifyNoticeAPI,
  registNoticeAPI,
  deleteNoticeAPI,
  searchNoticeBySubjectAPI,
} from "@/api/notice.js";

const noticeStore = {
  namespaced: true,

  state: {
    notices: [], // 게시글 목록
  },
  getters: {},
  mutations: {
    // 공지사항 게시글
    SET_NOTICE(state, payload) {
      state.notices = payload;
    },
  },
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

    // 공지사항 상세 보기
    setDetailNotice: async ({ commit }, qnaNo) => {
      await setDetailNoticeAPI(
        qnaNo,
        ({ data }) => {
          commit("SET_DETAIL_Notice", data);
        },
        error => {
          console.log("error(setDetailNotice):", error);
        }
      );
    },
  },
};

export default noticeStore;
