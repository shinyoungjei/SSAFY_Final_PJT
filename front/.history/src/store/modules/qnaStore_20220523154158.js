import {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
} from "@/api/qna.js";

const qnaStore = {
  namespaced: true,

  state: {
    questions: [], // Q&A 목록
    question: null, // Q&A 상세 정보
    qnaChat: [], //댓글정보
  },

  getters: {},

  mutations: {
    // Q&A 게시글 갱신
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },

    // Q&A 게시글 상세 정보 갱신
    SET_DETAIL_QUESION(state, payload) {
      state.question = payload;
    },

    // 키워드(제목)이 포함된 Q&A 게시글 목록 갱신
    SEARCH_QUESTION_BY_SUBJECT(state, payload) {
      state.questions = payload;
    },

    // 댓글
    CREATE_CHAT(state, payload) {
      state.qnaChat = payload;
    },
  },

  actions: {
    // Q&A 전체 게시글 조회
    setQuestions: ({ commit }) => {
      setQuestionsAPI(
        ({ data }) => {
          commit("SET_QUESTIONS", data);
        },
        error => {
          console.log("error(setQuestions):", error);
        }
      );
    }, // end setQuestions

    // Q&A 상세 정보 조회
    setDetailQuestion: async ({ commit }, qnaNo) => {
      await setDetailQuestionAPI(
        qnaNo,
        ({ data }) => {
          commit("SET_DETAIL_QUESION", data);
        },
        error => {
          console.log("error(setDetailQuestion):", error);
        }
      );
    }, // end setDetailQuestion

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

    // 댓글 달기.
    createdContent({ commit }, contentItem) {
      commit("CREATE_CHAT", contentItem);
    },
  },
};

export default qnaStore;
