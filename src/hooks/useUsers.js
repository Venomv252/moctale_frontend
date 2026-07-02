import { useState, useEffect } from "react";
import { getAllUsers } from "../services/user.service";
import toast from "react-hot-toast";

export function useUsers(initialFilters = {}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    unverified: 0,
  });
  const [filters, setFilters] = useState({
    search: "",
    isVerified: "",
    sortBy: "createdAt",
    sortOrder: "desc",
    ...initialFilters,
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers(filters);

      if (response.success) {
        setUsers(response.users);
        setStats({
          total: response.total,
          verified: response.verified,
          unverified: response.unverified,
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchUsers();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const refresh = () => {
    fetchUsers();
  };

  return {
    users,
    loading,
    stats,
    filters,
    updateFilters,
    refresh,
  };
}
