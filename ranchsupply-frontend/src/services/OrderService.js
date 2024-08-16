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

//get all orders

//update order

//delete order
