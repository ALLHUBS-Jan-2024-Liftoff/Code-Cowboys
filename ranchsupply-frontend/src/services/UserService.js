import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/user";


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${REST_API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
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

export const logoutUser = async () => {
  try {
    const response = await axios.get(`${REST_API_BASE_URL}/logout`, {
      withCredentials: true, // Ensure the session is managed properly
    });
    return response.data; // Handle the redirect on the front end if necessary
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${REST_API_BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

// Delete user by ID
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${REST_API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error.response.data.message);
    throw error;
  }
};

// Update user details
export const updateUser = async (userData) => {
  try {
    const response = await axios.put(`http://localhost:8080/user/update/${userData.id}`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

