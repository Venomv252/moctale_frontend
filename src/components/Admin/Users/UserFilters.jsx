import React from "react";
import { Search, Filter } from "lucide-react";

const UserFilters = ({ filters, onFilterChange, onSearch }) => {
  return (
    <div className="mb-6 rounded-xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, username, or phone..."
            value={filters.search || ""}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-zinc-800 py-2.5 pl-10 pr-4 text-white placeholder-gray-400 outline-none transition-all focus:border-violet-600/50 focus:bg-zinc-800/80"
          />
        </div>

        {/* Verification Status Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <select
            value={filters.isVerified ?? ""}
            onChange={(e) =>
              onFilterChange({ ...filters, isVerified: e.target.value })
            }
            className="w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-zinc-800 py-2.5 pl-10 pr-10 text-white outline-none transition-all focus:border-violet-600/50 focus:bg-zinc-800/80"
          >
            <option value="">All Users</option>
            <option value="true">Verified Only</option>
            <option value="false">Unverified Only</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-gray-400">Sort by:</span>
        <button
          onClick={() =>
            onFilterChange({
              ...filters,
              sortBy: "createdAt",
              sortOrder: filters.sortBy === "createdAt" && filters.sortOrder === "asc" ? "desc" : "asc",
            })
          }
          className={`rounded-lg px-3 py-1 text-sm transition-all ${
            filters.sortBy === "createdAt"
              ? "bg-violet-600 text-white"
              : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          Join Date {filters.sortBy === "createdAt" && (filters.sortOrder === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() =>
            onFilterChange({
              ...filters,
              sortBy: "firstName",
              sortOrder: filters.sortBy === "firstName" && filters.sortOrder === "asc" ? "desc" : "asc",
            })
          }
          className={`rounded-lg px-3 py-1 text-sm transition-all ${
            filters.sortBy === "firstName"
              ? "bg-violet-600 text-white"
              : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          Name {filters.sortBy === "firstName" && (filters.sortOrder === "asc" ? "↑" : "↓")}
        </button>
        <button
          onClick={() =>
            onFilterChange({
              ...filters,
              sortBy: "username",
              sortOrder: filters.sortBy === "username" && filters.sortOrder === "asc" ? "desc" : "asc",
            })
          }
          className={`rounded-lg px-3 py-1 text-sm transition-all ${
            filters.sortBy === "username"
              ? "bg-violet-600 text-white"
              : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          Username {filters.sortBy === "username" && (filters.sortOrder === "asc" ? "↑" : "↓")}
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
