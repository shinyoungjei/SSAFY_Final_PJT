import jwt_decode from "jwt-decode";
import { doLoginAPI, doRegistAPI } from "@/api/user.js";

const userStore = {
  namespaced: true,

  state: {
    loginUserInfo: {}, //로그인한 유저 정보
  },
  getters: {},
  mutations: {
    SET_USER_INFO(state, loginUserInfo) {
      state.loginUserInfo = loginUserInfo;
    },
    LOGOUT(state) {
      state.loginUserInfo = {};
    },
  },
  actions: {
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
          commit("SET_USER_INFO", {
            id: decodedToken.id,
            name: decodedToken.name,
          });
        },
        error => {
          console.log("error(doLogin):", error);
        }
      );
    },

    doRegist: ({ commit }, user) => {
      doRegistAPI(
        user,
        ({ data }) => {
          alert("회원가입 성공.");
        },
        error => {
          alert("회원가입 실패");
        }
      );
    },
  },
};

export default userStore;
