import axios from "axios";

const API = axios.create({
  baseURL: "https://moctale-backend.onrender.com/api/admin",
  withCredentials: true,
});

// Attach JWT automatically to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// =======================
// User APIs
// =======================

export const getAllUsers = async (filters = {}) => {
  const params = new URLSearchParams();

  if (filters.search) params.append("search", filters.search);
  if (filters.isVerified !== undefined && filters.isVerified !== "")
    params.append("isVerified", filters.isVerified);
  if (filters.sortBy) params.append("sortBy", filters.sortBy);
  if (filters.sortOrder) params.append("sortOrder", filters.sortOrder);

  const res = await API.get(`/users?${params.toString()}`);
  return res.data;
};

export const deleteUser = async (userId) => {
  const res = await API.delete(`/users/${userId}`);
  return res.data;
};

export const updateUserVerification = async (userId, isVerified) => {
  const res = await API.patch(`/users/${userId}/verify`, { isVerified });
  return res.data;
};
