import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api", // Backend API base URL
  withCredentials: true, // Include cookies in requests
});
