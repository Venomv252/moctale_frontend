import React, { useState, useEffect } from "react";
import { Users as UsersIcon, UserCheck, UserX, RefreshCw } from "lucide-react";
import UserTable from "../../components/Admin/Users/UserTable";
import UserFilters from "../../components/Admin/Users/UserFilters";
import { getAllUsers, deleteUser, updateUserVerification } from "../../services/user.service";
import toast from "react-hot-toast";

const AdminUsers = () => {
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
  });

  // Fetch users
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

  // Fetch users when filters change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchUsers();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(userId);
      if (response.success) {
        toast.success(response.message || "User deleted successfully");
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  // Handle verification toggle
  const handleVerificationToggle = async (userId, isVerified) => {
    try {
      const response = await updateUserVerification(userId, isVerified);
      if (response.success) {
        toast.success(response.message || `User ${isVerified ? "verified" : "unverified"} successfully`);
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error("Error updating verification:", error);
      toast.error(error.response?.data?.message || "Failed to update verification status");
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchUsers();
    toast.success("Users list refreshed");
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              User Management
            </h1>
            <p className="mt-2 text-gray-400">
              Manage all registered users on the platform
            </p>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Users */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-violet-600/5 p-6 backdrop-blur-sm transition-all hover:border-violet-600/30">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-violet-600/20 p-3">
              <UsersIcon className="h-6 w-6 text-violet-400" />
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Total Users</p>
              <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            All registered users (excluding admins)
          </div>
        </div>

        {/* Verified Users */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-green-600/10 to-green-600/5 p-6 backdrop-blur-sm transition-all hover:border-green-600/30">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-green-600/20 p-3">
              <UserCheck className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Verified</p>
              <p className="text-3xl font-bold text-white">{stats.verified}</p>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {stats.total > 0
              ? `${((stats.verified / stats.total) * 100).toFixed(1)}% of total users`
              : "0% of total users"}
          </div>
        </div>

        {/* Unverified Users */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-orange-600/10 to-orange-600/5 p-6 backdrop-blur-sm transition-all hover:border-orange-600/30">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-orange-600/20 p-3">
              <UserX className="h-6 w-6 text-orange-400" />
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Unverified</p>
              <p className="text-3xl font-bold text-white">{stats.unverified}</p>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {stats.total > 0
              ? `${((stats.unverified / stats.total) * 100).toFixed(1)}% of total users`
              : "0% of total users"}
          </div>
        </div>
      </div>

      {/* Filters */}
      <UserFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={fetchUsers}
      />

      {/* Results Count */}
      {!loading && (
        <div className="mb-4 text-sm text-gray-400">
          Showing {users.length} of {stats.total} users
        </div>
      )}

      {/* Users Table */}
      <UserTable
        users={users}
        loading={loading}
        onDelete={handleDeleteUser}
        onVerificationToggle={handleVerificationToggle}
      />
    </div>
  );
};

export default AdminUsers;
