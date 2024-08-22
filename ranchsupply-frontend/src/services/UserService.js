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
  try {
    const res = await axios.post(REST_API_BASE_URL + "/login", data);
    console.log("Login response:", res.data);
    if (res.data && res.data.id) {
      return {
        success: true,
        user: res.data,
      };
    } else {
      return {
        success: false,
        message: "Invalid login response",
      };
    }
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

// User Registration
export const registerUser = async (data) => {
  try {
    const res = await axios.post(REST_API_BASE_URL + "/register", data);
    return res.data;
  } catch (error) {
    console.error("Registration failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};
