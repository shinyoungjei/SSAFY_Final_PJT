import jwt_decode from "jwt-decode";
import {
  doLoginAPI,
  doRegistAPI,
  doModifyUserAPI,
  checkUserPasswordAPI,
  doModifyUserPasswordAPI,
  doDeleteUserAPI,
  setUserInterestAPI,
  deleteUserInterestAPI,
  insertUserInterestAPI,
} from "@/api/user.js";

const userStore = {
  namespaced: true,

  state: {
    loginUserInfo: {}, //로그인한 유저 정보
    userInfo: {},
    interest: [],
    passCheck: "",
  },
  getters: {},
  mutations: {
    SET_LOGIN_USER_INFO(state, loginUserInfo) {
      state.loginUserInfo = loginUserInfo;
    },
    LOGOUT(state) {
      state.loginUserInfo = {};
      sessionStorage.removeItem("access-token");
    },
    SET_USER_INTEREST(state, interest) {
      state.interest = interest;
    },
    CHECK_USER_PASSWORD(state, check) {
      state.passCheck = check;
    },
  },
  actions: {
    // 로그인
    doLogin: async ({ commit }, user) => {
      await doLoginAPI(
        user,
        ({ data }) => {
          //서버로부터 전달받은 토큰
          let token = data["access-token"];
          //세션 스토리지에 저장
          sessionStorage.setItem("access-token", token);
          //토큰 decode해서 내부의 정보를 통해 유저정보 세팅
          let decodedToken = jwt_decode(token);
          console.log("토큰 정보 :", decodedToken);
          //mutation을 활용해 유저정보 세팅
          commit("SET_LOGIN_USER_INFO", {
            id: decodedToken.id,
            name: decodedToken.name,
            email: decodedToken.email,
            contact: decodedToken.contact,
            interest: decodedToken.interest,
          });
        },
        (error) => {
          console.log("error(doLogin):", error);
        }
      );
    },

    //회원가입
    doRegist: (context, user) => {
      doRegistAPI(
        user,
        ({ data }) => {
          console.log("회원가입", data);
          alert("회원가입을 축하드립니다!");
        },
        (error) => {
          console.log("error", error);
        }
      );
    },

    //회원수정
    doModifyUser: (context, user) => {
      doModifyUserAPI(
        user,
        ({ data }) => {
          console.log("수정 성공", data);
          alert("회원 수정 완료!");
        },
        (error) => {
          console.log("회원수정 error", error);
        }
      );
    },

    // 비밀번호 확인
    checkUserPassword: async ({ commit }, user) => {
      await checkUserPasswordAPI(
        user,
        ({ data }) => {
          commit("CHECK_USER_PASSWORD", data);
        },
        (error) => {
          console.log("비밀번호 체크 error", error);
        }
      );
    },

    // 비밀번호 변경
    doModifyUserPassword: (context, user) => {
      doModifyUserPasswordAPI(
        user,
        ({ data }) => {
          console.log("비밀번호 변경 성공", data);
          alert("비밀번호 변경 완료!");
        },
        (error) => {
          console.log("비밀번호 변경 error", error);
        }
      );
    },

    //회원탈퇴
    doDeleteUser: (context, userId) => {
      doDeleteUserAPI(
        userId,
        ({ data }) => {
          console.log("회원탈퇴", data);
        },
        (error) => {
          console.log("탈퇴실패", error);
        }
      );
    },

    // 관심지역 가져오기
    setUserInterest: async ({ commit }, userId) => {
      await setUserInterestAPI(
        userId,
        ({ data }) => {
          commit("SET_USER_INTEREST", data);
        },
        (error) => {
          console.log("제거 실패", error);
        }
      );
    },

    // 관심지역 삭제
    deleteUserInterest: async (context, interest) => {
      await deleteUserInterestAPI(
        interest,
        ({ data }) => {
          console.log("제거 성공", data);
        },
        (error) => {
          console.log("제거 실패", error);
        }
      );
    },

    insertUserInterest: async (context, interest) => {
      await insertUserInterestAPI(
        interest,
        ({ data }) => {
          console.log("등록 성공", data);
        },
        (error) => {
          console.log("제거 실패", error);
        }
      );
    },
  },
};

export default userStore;
