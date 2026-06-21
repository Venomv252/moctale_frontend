import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/admin",
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

export const getContents = async () => {
  const res = await API.get("/getContents");
  return res.data;
};

export const addContent = async (data) => {
  const res = await API.post("/addContent", data);
  return res.data;
};

export const deleteContent = async (id) => {
  const res = await API.delete(`/deleteContent/${id}`);
  return res.data;
};

export const updateContent = async (id, data) => {
  const res = await API.put(`/updateContent/${id}`, data);
  return res.data;
};