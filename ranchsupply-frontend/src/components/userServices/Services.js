import axios from 'axios';

const API_URL = 'http://localhost:8080/admin';


export const getAllCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const addCategory = async (category) => {
  const response = await axios.post(`${API_URL}/categories`, category);
  return response.data;
};

export const updateCategory = async (categoryId, category) => {
  const response = await axios.put(`${API_URL}/categories/${categoryId}`, category);
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  await axios.delete(`${API_URL}/categories/${categoryId}`);
};

export const getCategoryById = async (categoryId) => {
    const response = await axios.get(`${API_URL}/categories/${categoryId}`);
    return response.data;
};

import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/products";

export const listProducts = () => axios.get(REST_API_BASE_URL);

export const addProductWithCategory = async (product, categoryId) => {
  const response = await axios.post(`${API_URL}/products/category/${categoryId}`, product);
  return response.data;
};

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`${API_URL}/products/${productId}`);
};

export const updateProduct = async (productId, product) => {
  const response = await axios.put(`${API_URL}/products/${productId}`, product);
  return response.data;
};

export const getProductById = (productId) =>
  axios.get(REST_API_BASE_URL + "/" + productId);

