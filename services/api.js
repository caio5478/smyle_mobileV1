import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.68.102:3050", // URL base do seu backend
  timeout: 10000, // Timeout opcional
});

export default api;
