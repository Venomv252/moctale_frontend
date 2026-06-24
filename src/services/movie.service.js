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

export const getMovies = async () => {
  const res = await API.get("/getmovies");
  return res.data;
};

export const addMovie = async (data) => {
  const res = await API.post("/addmovies", data);
  return res.data;
};

export const deleteMovie = async (id) => {
  const res = await API.delete(`/deletemovie/${id}`);
  return res.data;
};

export const updateMovie = async (id, data) => {
  const res = await API.put(`/updatemovie/${id}`, data);
  return res.data;
};