import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/user";

// Get user by ID
export const getUserById = (userId) => {
  return axios.get(REST_API_BASE_URL + "/" + userId).then((res) => {
    return res.data;
  });
};

//user Login
export const doLogin = async (data) => {
  const res = await axios.post(REST_API_BASE_URL + "/login", data);
  return res.data;
};
