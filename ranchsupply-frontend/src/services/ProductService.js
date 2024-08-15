import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/products";

// get all products
export const getAllProducts = async () => {
  const response = await axios.get(REST_API_BASE_URL);
  return response.data;
};

export const getProductById = (productId) =>
  axios.get(REST_API_BASE_URL + "/" + productId, {
    withCredentials: true,
  });
