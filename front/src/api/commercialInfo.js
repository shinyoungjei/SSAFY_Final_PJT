import { axiosInstance } from "@/api";

const axios = axiosInstance();

function setConvenienceStorePositionsAPI(dongCode, success, fail) {
  axios
    .get(`/commercialinfo/conveniencestore/${dongCode}`)
    .then(success)
    .catch(fail);
}

async function setConvenienceStoreDistanceAPI(aptInfo, success, fail) {
  await axios
    .patch(`/commercialinfo/conveniencestore/distance`, JSON.stringify(aptInfo))
    .then(success)
    .catch(fail);
}

export { setConvenienceStorePositionsAPI, setConvenienceStoreDistanceAPI };
