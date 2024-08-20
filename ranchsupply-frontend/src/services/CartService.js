import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/cart";

// add item to cart
export const addItemToCart = async (data, userId) => {
  const res = await axios.post(`${REST_API_BASE_URL}/${userId}`, data, {
    withCredentials: true,
  });
  return res.data;
};
// get cart by user id
export const getCartByUserId = async (userId) => {
  const res = await axios.get(`${REST_API_BASE_URL}/user/${userId}`);
  return res.data;
};

export const getCartItems = () => axios.get(REST_API_BASE_URL);

// remove item from cart
export const removeItemFromCart = async (userId, itemId) => {
  const res = await axios.delete(
    `${REST_API_BASE_URL}/${userId}/item/${itemId}`
  );
  return res.data;
};
// remove all items from cart
export const removeAllItemsFromCart = async (userId) => {
  const res = await axios.delete(`${REST_API_BASE_URL}/${userId}`);
  return res.data;
};
