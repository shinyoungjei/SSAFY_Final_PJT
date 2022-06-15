import { axiosInstance } from "@/api";

const axios = axiosInstance();

function setSidoAPI(success, fail) {
  axios.get("/apt/sido").then(success).catch(fail);
}

function setGugunAPI(sidocode, success, fail) {
  axios.get(`apt/gugun/${sidocode}`).then(success).catch(fail);
}

function setDongAPI(guguncode, success, fail) {
  axios.get(`apt/dong/${guguncode}`).then(success).catch(fail);
}

function setAptListAPI(dongcode, success, fail) {
  axios.get(`apt/aptInfo/${dongcode}`).then(success).catch(fail);
}

async function setAptDetailInfoAPI(aptCode, success, fail) {
  await axios.get(`apt/aptInfo/detail/${aptCode}`).then(success).catch(fail);
}

async function setRecentlyAptDealInfoAPI(aptCode, success, fail) {
  await axios
    .get(`apt/recentlyAptDealInfo/${aptCode}`)
    .then(success)
    .catch(fail);
}

async function setAptByNameAPI(aptName, success, fail) {
  await axios.get(`apt/aptInfo/search/${aptName}`).then(success).catch(fail);
}

function updateAptHitAPI(aptCode, success, fail) {
  axios.put(`apt/hit/${aptCode}`).then(success).catch(fail);
}

function setHighestHitAptAPI(success, fail) {
  axios.get(`apt/aptInfo/HighestHitApt`).then(success).catch(fail);
}

export {
  setSidoAPI,
  setGugunAPI,
  setDongAPI,
  setAptListAPI,
  setAptDetailInfoAPI,
  setRecentlyAptDealInfoAPI,
  setAptByNameAPI,
  updateAptHitAPI,
  setHighestHitAptAPI,
};
