import {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
  setAllQnAAnswerListAPI,
  registQnAAnswerAPI,
  deleteQnAAnswerAPI,
  modifyQnAAnwserAPI,
} from "@/api/qna.js";

const qnaStore = {
  namespaced: true,

  state: {
    questions: [], // Q&A 목록
    question: null, // Q&A 상세 정보
    qnaChats: [], //댓글정보
  },

  getters: {
    totalQnaChats(state) {
      return state.qnaChats.length;
    },
  },

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

    SET_ALL_QNA_ANSWER_LIST(state, payload) {
      state.qnaChats = payload;
    },

    //REGIST_QNA_ANSWER(state, payload)
  },

  actions: {
    // Q&A 전체 게시글 조회
    setQuestions: ({ commit }) => {
      setQuestionsAPI(
        ({ data }) => {
          commit("SET_QUESTIONS", data);
        },
        (error) => {
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
        (error) => {
          console.log("error(setDetailQuestion):", error);
        }
      );
    }, // end setDetailQuestion

    // Q&A 게시글 수정
    modifyQuestion: async (context, qna) => {
      await modifyQuestionAPI(
        qna,
        ({ data }) => {
          console.log("게시글 수정:", data);
        },
        (error) => {
          console.log("error(modifyQuestion):", error);
        }
      );
    }, // end modifyQuestion

    // Q&A 게시글 등록
    registQuestion: async (context, qna) => {
      await registQuestionAPI(
        qna,
        ({ data }) => {
          console.log("게시글 등록:", data);
        },
        (error) => {
          console.log("error(registQuestion):", error);
        }
      );
    }, // end registQuestion

    // Q&A 게시글 삭제
    deleteQuestion: async (context, qnaNo) => {
      await deleteQuestionAPI(
        qnaNo,
        ({ data }) => {
          console.log("게시글 삭제:", data);
        },
        (error) => {
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
        (error) => {
          console.log("error(searchQuestionBySubject:", error);
        }
      );
    }, // end searchQuestionBySubject

    setAllQnAAnswerList: ({ commit }, qnaNo) => {
      setAllQnAAnswerListAPI(
        qnaNo,
        ({ data }) => {
          commit("SET_ALL_QNA_ANSWER_LIST", data);
        },
        (error) => {
          console.log("error(setAllQnAAnswerList:", error);
        }
      );
    },

    registQnAAnswer: async (context, qna) => {
      await registQnAAnswerAPI(
        qna,
        ({ data }) => {
          console.log("답변 등록:", data);
        },
        (error) => {
          console.log("error(registQnAAnswer):", error);
        }
      );
    },

    deleteQnAAnswer: async (context, qna) => {
      await deleteQnAAnswerAPI(
        qna,
        ({ data }) => {
          console.log("답변 삭제:", data);
        },
        (error) => {
          console.log("error(deleteQuestion):", error);
        }
      );
    },

    modifyQnAAnwser: async (context, qna) => {
      await modifyQnAAnwserAPI(
        qna,
        ({ data }) => {
          console.log("답변 수정:", data);
        },
        (error) => {
          console.log("error(deleteQuestion):", error);
        }
      );
    },
  },
};

export default qnaStore;
