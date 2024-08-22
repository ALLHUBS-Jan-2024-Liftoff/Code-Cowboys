import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/products";

// get all products


export const listProducts = async () => {
  const response = await axios.get(REST_API_BASE_URL);
  return response.data;
};

// Get a product by ID
export const getProductById = async (productId) => {
  const response = await axios.get(`${REST_API_BASE_URL}/${productId}`);
  return response.data;
};

// Add a new product
export const addProduct = async (product) => {
  const response = await axios.post(REST_API_BASE_URL, product, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

// Update an existing product
export const updateProduct = async (productId, product) => {
  const response = await axios.put(`${REST_API_BASE_URL}/${productId}`, product, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
  await axios.delete(`${REST_API_BASE_URL}/${productId}`);
};

// Search for products by title
export const searchProducts = async (searchTerm) => {
  const response = await axios.get(`${REST_API_BASE_URL}/search`, {
    params: { searchTerm }
  });
  return response.data;
};
