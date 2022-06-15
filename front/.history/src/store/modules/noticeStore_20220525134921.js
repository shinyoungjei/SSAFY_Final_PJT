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
    notice: null, // 상세보기
  },
  getters: {},
  mutations: {
    // 공지사항 게시글
    SET_NOTICES(state, payload) {
      state.notices = payload;
    },

    // 상세 보기
    SET_DETAIL_NOTICE(state, payload) {
      state.notice = payload;
    },

    // 키워드(제목)이 포함된 Q&A 게시글 목록 갱신
    SEARCH_NOTICE_BY_SUBJECT(state, payload) {
      state.notices = payload;
    },
  },
  actions: {
    // 공지사항 전체 게시글 조회
    setNotices: ({ commit }) => {
      setNoticesAPI(
        ({ data }) => {
          commit("SET_NOTICES", data);
        },
        error => {
          console.log("error(setNotices):", error);
        }
      );
    },

    // 공지사항 상세 보기
    setDetailNotice: async ({ commit }, noticeNo) => {
      await setDetailNoticeAPI(
        noticeNo,
        ({ data }) => {
          commit("SET_DETAIL_NOTICE", data);
        },
        error => {
          console.log("error(setDetailNotice):", error);
        }
      );
    },
    // 공지사항 게시글 수정
    modifyNotice: (context, notice) => {
      modifyNoticeAPI(
        notice,
        ({ data }) => {
          console.log("게시글 수정:", data);
        },
        error => {
          console.log("error(modifyNotice):", error);
        }
      );
    },

    // 공지사항 게시글 등록
    registNotice: (context, notice) => {
      registNoticeAPI(
        notice,
        ({ data }) => {
          console.log("게시글 등록:", data);
        },
        error => {
          console.log("error(registNotice):", error);
        }
      );
    },

    // 공지사항 게시글 삭제
    deleteNotice: (context, noticeNo) => {
      deleteNoticeAPI(
        noticeNo,
        ({ data }) => {
          console.log("게시글 삭제:", data);
        },
        error => {
          console.log("error(deleteNotice):", error);
        }
      );
    },

    // 제목으로 공지사항 게시글 검색
    searchNoticeBySubject: ({ commit }, keyword) => {
      searchNoticeBySubjectAPI(
        keyword,
        ({ data }) => {
          commit("SEARCH_NOTICE_BY_SUBJECT", data);
        },
        error => {
          console.log("error(searchNoticeBySubject:", error);
        }
      );
    },
  },
};

export default noticeStore;
