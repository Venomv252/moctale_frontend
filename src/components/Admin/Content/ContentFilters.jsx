import React from "react";

const ContentFilters = ({ filters, onFilterChange, onClearFilters }) => {
  // Common language options
  const languageOptions = [
    "English",
    "Hindi",
    "Japanese",
    "Korean",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Bengali",
    "Marathi",
  ];

  // Common genre options
  const genreOptions = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ];

  // Generate year options (last 50 years + upcoming)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 55 }, (_, i) => currentYear + 5 - i);

  const handleMultiSelectChange = (field, value) => {
    const currentValues = filters[field] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    onFilterChange(field, newValues);
  };

  const isSelected = (field, value) => {
    return (filters[field] || []).includes(value);
  };

  return (
    <div className="space-y-6 rounded-xl border border-white/10 bg-[#0d0d0d] p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
        {Object.values(filters).some((val) =>
          Array.isArray(val) ? val.length > 0 : val !== ""
        ) && (
          <button
            onClick={onClearFilters}
            className="text-sm text-red-400 transition hover:text-red-300"
          >
            Clear All Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Type Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Content Type
          </label>
          <select
            value={filters.type || ""}
            onChange={(e) => onFilterChange("type", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white outline-none transition focus:border-violet-600"
          >
            <option value="">All Types</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="anime">Anime</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Status
          </label>
          <select
            value={filters.status || ""}
            onChange={(e) => onFilterChange("status", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white outline-none transition focus:border-violet-600"
          >
            <option value="">All Statuses</option>
            <option value="released">Released</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Release Year Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Release Year
          </label>
          <select
            value={filters.releaseYear || ""}
            onChange={(e) => onFilterChange("releaseYear", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white outline-none transition focus:border-violet-600"
          >
            <option value="">All Years</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Featured
          </label>
          <select
            value={filters.isFeatured || ""}
            onChange={(e) => onFilterChange("isFeatured", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white outline-none transition focus:border-violet-600"
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Trending Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Trending
          </label>
          <select
            value={filters.isTrending || ""}
            onChange={(e) => onFilterChange("isTrending", e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-2.5 text-white outline-none transition focus:border-violet-600"
          >
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      {/* Language Filter - Multi-Select */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Languages
          {filters.languages?.length > 0 && (
            <span className="ml-2 text-xs text-violet-400">
              ({filters.languages.length} selected)
            </span>
          )}
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {languageOptions.map((language) => (
            <button
              key={language}
              onClick={() => handleMultiSelectChange("languages", language)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isSelected("languages", language)
                  ? "bg-violet-600 text-white"
                  : "bg-[#111] text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-300"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Genre Filter - Multi-Select */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Genres
          {filters.genres?.length > 0 && (
            <span className="ml-2 text-xs text-violet-400">
              ({filters.genres.length} selected)
            </span>
          )}
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {genreOptions.map((genre) => (
            <button
              key={genre}
              onClick={() => handleMultiSelectChange("genres", genre)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isSelected("genres", genre)
                  ? "bg-violet-600 text-white"
                  : "bg-[#111] text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-300"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentFilters;
