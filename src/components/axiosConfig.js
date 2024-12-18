// src/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1", // Clear the base URL
});

export default apiClient;
