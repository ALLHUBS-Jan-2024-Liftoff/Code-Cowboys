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
   // if (res.data.success) {
      return {
        success: true,
        user: res.data.user,
      };
    // } else {
    //   console.log(res);
    //   return {
    //     success: false,
    //     message: res.data.message,
    //   };
  //  }
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
