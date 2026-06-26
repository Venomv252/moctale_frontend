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

// =======================
// Content APIs
// =======================

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

export const getContentOverview = async () => {
  const res = await API.get("/contentOverview");
  return res.data;
};

export const searchContent = async (filters) => {
  // Build query parameters from filters
  const params = new URLSearchParams();

  // Add title search
  if (filters.title) {
    params.append("title", filters.title);
  }

  // Add single-select filters
  if (filters.type) {
    params.append("type", filters.type);
  }

  if (filters.status) {
    params.append("status", filters.status);
  }

  if (filters.releaseYear) {
    params.append("releaseYear", filters.releaseYear);
  }

  if (filters.isFeatured) {
    params.append("isFeatured", filters.isFeatured);
  }

  if (filters.isTrending) {
    params.append("isTrending", filters.isTrending);
  }

  // Add multi-select filters (arrays)
  if (filters.languages && filters.languages.length > 0) {
    params.append("languages", filters.languages.join(","));
  }

  if (filters.genres && filters.genres.length > 0) {
    params.append("genres", filters.genres.join(","));
  }

  try {
    // Try backend endpoint first
    const res = await API.get(`/searchContent?${params.toString()}`);
    return res.data;
  } catch (error) {
    // If backend endpoint doesn't exist (404), fall back to client-side filtering
    if (error.response && error.response.status === 404) {
      console.warn(
        "Backend search endpoint not available, using client-side filtering"
      );

      // Fetch all content and filter on client
      const allContentRes = await API.get("/getContents");
      const allContents = allContentRes.data.contents || allContentRes.data || [];

      // Apply filters
      let filtered = allContents;

      // Filter by title
      if (filters.title) {
        filtered = filtered.filter((content) =>
          content.title.toLowerCase().includes(filters.title.toLowerCase())
        );
      }

      // Filter by type
      if (filters.type) {
        filtered = filtered.filter(
          (content) => content.type.toLowerCase() === filters.type.toLowerCase()
        );
      }

      // Filter by status
      if (filters.status) {
        filtered = filtered.filter(
          (content) =>
            content.status.toLowerCase() === filters.status.toLowerCase()
        );
      }

      // Filter by release year
      if (filters.releaseYear) {
        filtered = filtered.filter((content) => {
          if (!content.releaseDate) return false;
          const year = new Date(content.releaseDate).getFullYear();
          return year === parseInt(filters.releaseYear);
        });
      }

      // Filter by featured
      if (filters.isFeatured !== "" && filters.isFeatured !== undefined) {
        const isFeatured = filters.isFeatured === "true";
        filtered = filtered.filter(
          (content) => content.isFeatured === isFeatured
        );
      }

      // Filter by trending
      if (filters.isTrending !== "" && filters.isTrending !== undefined) {
        const isTrending = filters.isTrending === "true";
        filtered = filtered.filter(
          (content) => content.isTrending === isTrending
        );
      }

      // Filter by languages
      if (filters.languages && filters.languages.length > 0) {
        filtered = filtered.filter((content) => {
          if (!content.primaryLanguage && !content.availableLanguages)
            return false;

          const contentLanguages = [
            content.primaryLanguage,
            ...(Array.isArray(content.availableLanguages)
              ? content.availableLanguages
              : []),
          ]
            .filter(Boolean)
            .map((lang) => lang.toLowerCase());

          return filters.languages.some((filterLang) =>
            contentLanguages.some((contentLang) =>
              contentLang.includes(filterLang.toLowerCase())
            )
          );
        });
      }

      // Filter by genres
      if (filters.genres && filters.genres.length > 0) {
        filtered = filtered.filter((content) => {
          if (!content.genres || !Array.isArray(content.genres)) return false;

          const contentGenres = content.genres.map((g) => g.toLowerCase());

          return filters.genres.some((filterGenre) =>
            contentGenres.some((contentGenre) =>
              contentGenre.includes(filterGenre.toLowerCase())
            )
          );
        });
      }

      return { contents: filtered, clientSideFiltering: true };
    }

    // If it's another error, throw it
    throw error;
  }
};