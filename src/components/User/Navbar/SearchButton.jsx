import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp, Clock } from "lucide-react";

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const recentSearches = ["Naruto", "Breaking Bad", "Avengers"];
  const trendingSearches = ["Solo Leveling", "Dune 2", "The Boys Season 4"];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // TODO: Implement search
    }
  };

  return (
    <>
      {/* Search Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            />

            {/* Search Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-24 z-[61] w-full max-w-2xl -translate-x-1/2 px-4"
            >
              <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/95 p-6 shadow-2xl backdrop-blur-xl">
                {/* Search Input */}
                <form onSubmit={handleSearch} className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search movies, series, anime, actors, collections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-12 text-white placeholder-gray-500 outline-none transition-all focus:border-violet-600 focus:bg-white/10"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </form>

                {/* Search Suggestions */}
                {!searchQuery && (
                  <div className="space-y-6">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Recent Searches</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => setSearchQuery(search)}
                              className="rounded-lg bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {search}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Trending Searches */}
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-medium">Trending Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(search)}
                            className="rounded-lg bg-violet-600/10 px-4 py-2 text-sm text-violet-400 transition-colors hover:bg-violet-600/20 hover:text-violet-300"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Close Button */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Press ESC to close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchButton;
