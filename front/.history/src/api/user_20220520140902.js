import { axiosInstance } from "@/api";

const axios = axiosInstance();

async function doLoginAPI(user, success, fail) {
  await axios
    .post("/user/login", JSON.stringify(user))
    .then(success)
    .catch(fail);
}

export { doLoginAPI };
