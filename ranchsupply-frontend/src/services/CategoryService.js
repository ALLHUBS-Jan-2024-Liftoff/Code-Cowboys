import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/categories";

// Get all categories
export const getAllCategories = async () => {
  const response = await axios.get(REST_API_BASE_URL);
  return response.data;
};

// Get a category by ID
export const getCategoryById = async (categoryId) => {
  const response = await axios.get(`${REST_API_BASE_URL}/${categoryId}`);
  return response.data;
};

// Add a new category
export const addCategory = async (category) => {
  const response = await axios.post(REST_API_BASE_URL, category, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

// Update an existing category
export const updateCategory = async (categoryId, category) => {
  const response = await axios.put(`${REST_API_BASE_URL}/${categoryId}`, category, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

// Delete a category by ID
export const deleteCategory = async (categoryId) => {
  await axios.delete(`${REST_API_BASE_URL}/${categoryId}`);
};
