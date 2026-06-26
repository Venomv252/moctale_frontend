import React, { useState, useEffect, useCallback } from "react";
import ContentTable from "./ContentTable";
import ContentFilters from "./ContentFilters";
import Loader from "../../Shared/Loader";
import EmptyState from "../../Shared/EmptyState";
import { searchContent, deleteContent } from "../../../services/content.service";

const SearchContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    releaseYear: "",
    isFeatured: "",
    isTrending: "",
    languages: [],
    genres: [],
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [isClientSideFiltering, setIsClientSideFiltering] = useState(false);

  // Debounce search query (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Auto-search when debounced query or filters change
  useEffect(() => {
    if (
      debouncedQuery ||
      Object.values(filters).some((val) =>
        Array.isArray(val) ? val.length > 0 : val !== ""
      )
    ) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, filters]);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      setSearched(true);

      const searchFilters = {
        title: debouncedQuery,
        ...filters,
      };

      const data = await searchContent(searchFilters);

      setResults(data.contents || data || []);
      setIsClientSideFiltering(data.clientSideFiltering || false);
    } catch (err) {
      console.error("Search failed:", err);
      alert("Failed to search content. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery, filters]);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    setFilters({
      type: "",
      status: "",
      releaseYear: "",
      isFeatured: "",
      isTrending: "",
      languages: [],
      genres: [],
    });
    setResults([]);
    setSearched(false);
    setIsClientSideFiltering(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this content?")) {
      return;
    }

    try {
      await deleteContent(id);
      setResults((prev) => prev.filter((content) => content._id !== id));
    } catch (err) {
      console.error("Failed to delete content:", err);
      alert("Failed to delete content. Please try again.");
    }
  };

  const hasActiveFilters =
    searchQuery ||
    Object.values(filters).some((val) =>
      Array.isArray(val) ? val.length > 0 : val !== ""
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Search Content</h2>
          <p className="mt-1 text-sm text-gray-400">
            Discover and filter through your content library
          </p>
        </div>
      </div>

      {/* Quick Search */}
      <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6">
        <label className="mb-3 block text-sm font-medium text-gray-300">
          Quick Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title... (auto-search with 300ms delay)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3.5 pl-11 text-white placeholder-gray-500 outline-none transition focus:border-violet-600"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-300"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && searchQuery !== debouncedQuery && (
          <p className="mt-2 text-xs text-gray-500">
            Searching for "{searchQuery}"...
          </p>
        )}
      </div>

      {/* Advanced Filters */}
      <ContentFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Search Status Banner */}
      {isClientSideFiltering && searched && (
        <div className="rounded-lg border border-blue-600/20 bg-blue-600/10 p-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">ℹ️</span>
            <div className="flex-1">
              <p className="font-medium text-blue-400">
                Client-Side Filtering Active
              </p>
              <p className="mt-1 text-sm text-blue-300">
                Backend search endpoint not available. Filtering is being performed
                on the client side.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      {searched && !loading && results.length > 0 && (
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0d0d0d] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <p className="text-sm text-gray-400">Search Results</p>
              <p className="text-xl font-semibold text-white">
                Showing {results.length} result{results.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="rounded-lg bg-red-600/20 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-600/30"
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}

      {/* Loading State */}
      {loading && <Loader text="Searching content..." />}

      {/* Empty State - No Search Performed */}
      {!loading && !searched && (
        <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-12">
          <EmptyState
            icon="🔍"
            title="Start Your Search"
            message="Use the search bar above or apply filters to find specific content. Search results will appear here."
          />
        </div>
      )}

      {/* Empty State - No Results */}
      {!loading && searched && results.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-12">
          <EmptyState
            icon="😕"
            title="No Results Found"
            message="No content matches your search criteria. Try adjusting your filters or search query."
            actionLabel="Clear All Filters"
            onAction={handleClearFilters}
          />
        </div>
      )}

      {/* Search Results Table */}
      {!loading && results.length > 0 && (
        <div className="space-y-4">
          <ContentTable contents={results} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default SearchContent;