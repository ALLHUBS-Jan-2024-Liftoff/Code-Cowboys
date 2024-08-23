import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/orders";


//create order
export const createOrder = async (order) => {
  const response = await axios.post(REST_API_BASE_URL, order);
  return response.data;
};

//get order by ID
export const getOrderById = async (orderId) => {
  const response = await axios.get(REST_API_BASE_URL + "/" + orderId);
  return response.data;
};
// get all orders by user id
export const getAllOrdersByUserId = async (userId) => {
  const result = await axios.get(`${REST_API_BASE_URL}/user/${userId}`);
  return result.data;
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get(REST_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting all orders:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Update order
export const updateOrder = async (orderId, updateRequest) => {
  try {
    const response = await axios.put(`${REST_API_BASE_URL}/${orderId}`, updateRequest);
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Delete order
export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${REST_API_BASE_URL}/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting order:", error.response?.data?.message || error.message);
    throw error;
  }
};
