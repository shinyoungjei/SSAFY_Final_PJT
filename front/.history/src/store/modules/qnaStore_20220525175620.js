import {
  setQuestionsAPI,
  setDetailQuestionAPI,
  modifyQuestionAPI,
  registQuestionAPI,
  deleteQuestionAPI,
  searchQuestionBySubjectAPI,
  setAnswersAPI,
  setDetailAnswerAPI,
  modifyAnswerAPI,
  registAnswerAPI,
  deleteAnswerAPI,
} from "@/api/qna.js";

const qnaStore = {
  namespaced: true,

  state: {
    questions: [], // Q&A 목록
    question: null, // Q&A 상세 정보
    qnaChats: [], //댓글정보
  },

  getters: {
    allTodosCount(state) {
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

    // 댓글
    CREATE_CHAT(state, payload) {
      state.qnaChats.push(payload);
    },
    DELETE_TODO(state, contentItem) {
      const index = state.qnaChats.indexOf(contentItem);
      state.qnaChats.splice(index, 1);
    },
    UPDATE_TODO_STATUS(state, contentItem) {
      // console.log(state);
      // console.log(todoItem);
      state.qnaChats = state.qnaChats.map(qnaChat => {
        if (qnaChat === contentItem) {
          return {
            // title: todoItem.title,
            ...qnaChat,
            completed: !contentItem.completed,
          };
        }
        return qnaChat;
      });
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

    // 전체 댓글 게시글 조회
    setAnswers: ({ commit }) => {
      setAnswersAPI(
        ({ data }) => {
          commit("SET_ANSWERS", data);
        },
        error => {
          console.log("error(setAnswers):", error);
        }
      );
    },

    // 해당 댓글 조회
    setDetailAnswer: async ({ commit }, qnaNo) => {
      await setDetailAnswerAPI(
        qnaNo,
        ({ data }) => {
          commit("SET_DETAIL_ANSWER", data);
        },
        error => {
          console.log("error(setDetailAnswer):", error);
        }
      );
    },

    //  게시글 댓글 수정
    modifyAnswer: (context, qna) => {
      modifyAnswerAPI(
        qna,
        ({ data }) => {
          console.log("게시글 수정:", data);
        },
        error => {
          console.log("error(modifyQuestion):", error);
        }
      );
    }, // end modifyQuestion

    //댓글달기
    registAnswer: (context, qna) => {
      registAnswerAPI(
        qna,
        ({ data }) => {
          console.log("게시글 등록:", data);
        },
        error => {
          console.log("error(registQuestion):", error);
        }
      );
    },
    // Q&A 게시글 삭제
    deleteAnswer: (context, qnaNo) => {
      deleteAnswerAPI(
        qnaNo,
        ({ data }) => {
          console.log("게시글 삭제:", data);
        },
        error => {
          console.log("error(deleteQuestion):", error);
        }
      );
    },

    // 댓글 달기.
    //createdContent({ commit }, contentItem) {
    //  commit("CREATE_CHAT", contentItem);
    //},
    //deleteChat({ commit }, contentItem) {
    //  commit("DELETE_TODO", contentItem);
    //},
    //updateTodoStatus({ commit }, contentItem) {
    //  commit("UPDATE_TODO_STATUS", contentItem);
    //},
  },
};

export default qnaStore;
