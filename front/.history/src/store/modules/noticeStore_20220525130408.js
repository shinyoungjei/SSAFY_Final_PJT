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
    SET_NOTICE(state, payload) {
      state.notices = payload;
    },

    // 상세 보기
    SET_DETAIL_NOTICE(state, payload) {
      state.notice = payload;
    },

    // 키워드(제목)이 포함된 Q&A 게시글 목록 갱신
    SEARCH_QUESTION_BY_SUBJECT(state, payload) {
      state.questions = payload;
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
          commit("SET_DETAIL_NOTICE", data);
        },
        error => {
          console.log("error(setDetailNotice):", error);
        }
      );
    },
    // Q&A 게시글 수정
    modifyQuestion: (context, qna) => {
      modifyQuestionAPI(
        qna,
        ({ data }) => {
          console.log("게시글 수정:", data);
        },
        error => {
          console.log("error(modifyQuestion):", error);
        }
      );
    }, // end modifyQuestion

    // Q&A 게시글 등록
    registQuestion: (context, qna) => {
      registQuestionAPI(
        qna,
        ({ data }) => {
          console.log("게시글 등록:", data);
        },
        error => {
          console.log("error(registQuestion):", error);
        }
      );
    }, // end registQuestion

    // Q&A 게시글 삭제
    deleteQuestion: (context, qnaNo) => {
      deleteQuestionAPI(
        qnaNo,
        ({ data }) => {
          console.log("게시글 삭제:", data);
        },
        error => {
          console.log("error(deleteQuestion):", error);
        }
      );
    }, // end deleteQuestion

    // 제목으로 Q&A 게시글 검색
    searchQuestionBySubject: ({ commit }, keyword) => {
      searchQuestionBySubjectAPI(
        keyword,
        ({ data }) => {
          commit("SEARCH_QUESTION_BY_SUBJECT", data);
        },
        error => {
          console.log("error(searchQuestionBySubject:", error);
        }
      );
    }, // end searchQuestionBySubject
  },
};

export default noticeStore;
