import {
  setSidoAPI,
  setGugunAPI,
  setDongAPI,
  setAptListAPI,
  setAptDetailInfoAPI,
  setRecentlyAptDealInfoAPI,
  setAptByNameAPI,
  updateAptHitAPI,
  setHighestHitAptAPI,
} from "@/api/apt.js";
import {
  setConvenienceStorePositionsAPI,
  setConvenienceStoreDistanceAPI,
} from "@/api/commercialInfo.js";
import router from "@/router";

const aptStore = {
  namespaced: true,

  state: {
    sidocodeList: [],
    guguncodeList: [],
    dongcodeList: [],
    selectedAptcode: null,
    aptList: [],
    markerPositions: [],
    convenienceStorePositions: [],
    aptDetailInfo: {},
    recentlyAptDealInfo: {},
    recommendAptList: [],
    nearestConvenienceStoreDistance: null,
  },

  getters: {},

  mutations: {
    SET_SIDO(state, payload) {
      state.sidocodeList = payload;
    },
    SET_GUGUN(state, payload) {
      state.guguncodeList = payload;
    },
    SET_DONG(state, payload) {
      state.dongcodeList = payload;
    },
    SET_APTCODE(state, payload) {
      state.selectedAptcode = payload;
    },
    SET_APTLIST(state, payload) {
      state.aptList = payload;
      state.markerPositions = [];
      state.aptList.forEach((apt) => {
        state.markerPositions.push([apt.lat, apt.lng]);
      });
    },
    CLEAR_APTINFO(state) {
      state.guguncodeList = [];
      state.dongcodeList = [];
      state.selectedAptcode = null;
      state.aptList = [];
    },
    SET_CONVENIENCE_STORE_POSITIONS(state, payload) {
      state.convenienceStorePositions = [];
      payload.forEach((el) => {
        state.convenienceStorePositions.push([el.lat, el.lng]);
      });
    },
    SET_APT_DETAIL_INFO(state, payload) {
      state.aptDetailInfo = payload;
    },
    SET_RECENTLY_APT_DEAL_INFO(state, payload) {
      state.recentlyAptDealInfo = payload;
    },

    SET_HIGHEST_HIT_APT(state, payload) {
      state.recommendAptList = payload;
    },

    SET_CONVENIENCE_STORE_DISTANCE(state, payload) {
      state.nearestConvenienceStoreDistance = payload;
    },
  },

  actions: {
    setSido: ({ commit }) => {
      setSidoAPI(
        ({ data }) => {
          commit("SET_SIDO", data);
        },
        (error) => {
          console.log("error(setSido):", error);
          router.push("/user/login");
        }
      );
    },

    setGugun: ({ commit }, sidocode) => {
      setGugunAPI(
        sidocode,
        ({ data }) => {
          commit("SET_GUGUN", data);
        },
        (error) => {
          console.log("error(setGugun):", error);
        }
      );
    },

    setDong: ({ commit }, guguncode) => {
      setDongAPI(
        guguncode,
        ({ data }) => {
          commit("SET_DONG", data);
        },
        (error) => {
          console.log("error(setDong):", error);
        }
      );
    },

    setAptList: ({ commit }, dongcode) => {
      setAptListAPI(
        dongcode,
        ({ data }) => {
          commit("SET_APTLIST", data);
        },
        (error) => {
          console.log("error(setAptList):", error);
        }
      );
    },

    setConvenienceStorePositions: ({ commit }, dongCode) => {
      setConvenienceStorePositionsAPI(
        dongCode,
        ({ data }) => {
          commit("SET_CONVENIENCE_STORE_POSITIONS", data);
        },
        (error) => {
          console.log("error(setConvenienceStorePositions):", error);
        }
      );
    },

    setAptDetailInfo: async ({ commit }, aptCode) => {
      await setAptDetailInfoAPI(
        aptCode,
        ({ data }) => {
          commit("SET_APT_DETAIL_INFO", data);
        },
        (error) => {
          console.log("error(setAptDetailInfo):", error);
        }
      );
    },

    setRecentlyAptDealInfo: async ({ commit }, aptCode) => {
      await setRecentlyAptDealInfoAPI(
        aptCode,
        ({ data }) => {
          commit("SET_RECENTLY_APT_DEAL_INFO", data);
        },
        (error) => {
          console.log("error(setRecentlyAptDealInfo):", error);
        }
      );
    },

    setAptByName: ({ commit }, aptName) => {
      setAptByNameAPI(
        aptName,
        ({ data }) => {
          commit("SET_APTLIST", data);
        },
        (error) => {
          console.log("error(setAptList):", error);
        }
      );
    },

    updateAptHit: (context, aptName) => {
      updateAptHitAPI(
        aptName,
        ({ data }) => {
          console.log("조회수 증가 여부:", data);
        },
        (error) => {
          console.log("error(setAptList):", error);
        }
      );
    },

    setHighestHitApt: ({ commit }) => {
      setHighestHitAptAPI(
        ({ data }) => {
          commit("SET_HIGHEST_HIT_APT", data);
        },
        (error) => {
          console.log("error(setHighestHitApt):", error);
        }
      );
    },

    setConvenienceStoreDistance: async ({ commit }, aptInfo) => {
      await setConvenienceStoreDistanceAPI(
        aptInfo,
        ({ data }) => {
          console.log("nearest convenience store distance :", data);
          commit("SET_CONVENIENCE_STORE_DISTANCE", data);
        },
        (error) => {
          console.log("error(setConvenienceStoreDistance):", error);
        }
      );
    },
  },
};

export default aptStore;
