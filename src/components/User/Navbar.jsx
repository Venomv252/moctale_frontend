import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import SearchButton from "./Navbar/SearchButton";
import NotificationButton from "./Navbar/NotificationButton";
import GenreExplorerButton from "./Navbar/GenreExplorerButton";
import ProfileMenu from "./Navbar/ProfileMenu";
import MobileDrawer from "./Navbar/MobileDrawer";
import { navLinks } from "./Navbar/navConfig";
import * as LucideIcons from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("content");
  const [recentSearches, setRecentSearches] = useState([
    "Citizen Vigilante",
    "Suits",
    "No Smoking",
    "Made in India - A Titan Story",
    "Haunted 3D: Echoes of the Past",
    "Chainsaw Man",
    "Chainsaw Man: Reze Arc",
    "Avengers: Infinity War",
  ]);
  
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  const tabs = [
    { id: "content", label: "Content" },
    { id: "collections", label: "Collections" },
    { id: "cast", label: "Cast & Crew" },
    { id: "users", label: "Users" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery, "in", activeTab);
      // TODO: Implement search
    }
  };

  const removeRecentSearch = (searchToRemove) => {
    setRecentSearches(recentSearches.filter((s) => s !== searchToRemove));
  };

  const clearAllHistory = () => {
    setRecentSearches([]);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#0d0d0d]/95 shadow-xl backdrop-blur-xl"
            : "border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-lg"
        }`}
        style={{ height: isSearchOpen ? "auto" : "64px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          {/* Top Bar */}
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <Link
              to="/home"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <div className="h-[35px] w-[105px] flex-shrink-0 flex-grow-0 sm:h-[40px] sm:w-[120px]">
                <img
                  alt="Moctale Logo"
                  fetchPriority="high"
                  width="118"
                  height="30"
                  decoding="async"
                  className="pointer-events-none h-full w-full select-none object-contain"
                  src="https://www.moctale.in/Moctale-logo-HQ.svg"
                  style={{
                    color: "transparent",
                  }}
                />
              </div>
            </Link>

            {/* Right: Navigation + Actions */}
            <div className="flex items-center gap-6">
              {/* Navigation Items - Desktop only (hidden when search is open) */}
              {!isSearchOpen && (
                <nav className="hidden items-center gap-2 lg:flex">
                  {navLinks.map((item) => {
                    const Icon = LucideIcons[item.icon];
                    const isActive = location.pathname === item.path;

                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`h-5 w-5 transition-transform duration-200 ${
                              isActive
                                ? ""
                                : "group-hover:rotate-3 group-hover:scale-110"
                            }`}
                          />
                        )}

                        {/* Show text only for active item */}
                        {isActive && (
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>
                        )}

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-[14px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#740DF6] to-transparent transition-all duration-500 ease-in-out" />
                        )}

                        {/* Hover Glow */}
                        {!isActive && (
                          <div className="absolute inset-0 -z-10 rounded-lg bg-violet-600/0 transition-colors duration-300 group-hover:bg-violet-600/10" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              )}

              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {!isSearchOpen && (
                  <>
                    {/* Genre Explorer - Desktop only */}
                    <div className="hidden sm:block">
                      <GenreExplorerButton />
                    </div>

                    {/* Search Button */}
                    <SearchButton onClick={() => setIsSearchOpen(true)} />

                    {isAuthenticated ? (
                      <>
                        {/* Notifications - Desktop only */}
                        <div className="hidden sm:block">
                          <NotificationButton />
                        </div>

                        {/* Profile */}
                        <div className="ml-5">
                          <ProfileMenu userInitials="U" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Sign In Button - Desktop */}
                        <Link
                          to="/login"
                          className="hidden rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/50 sm:block"
                        >
                          Sign In
                        </Link>

                        {/* Sign In Button - Mobile */}
                        <Link
                          to="/login"
                          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-700 sm:hidden"
                        >
                          Sign In
                        </Link>
                      </>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setIsMobileDrawerOpen(true)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white lg:hidden"
                      aria-label="Open menu"
                    >
                      <Menu className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Close Search Button (X) */}
                {isSearchOpen && (
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar - Expanded View */}
          {isSearchOpen && (
            <div className="border-t border-white/5 pb-6 pt-4">
              {/* Search Input */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for Movies, Shows, Anime, Cast & Crew or Users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full rounded-lg border border-white/10 bg-[#1a1a1a] py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-600/50 focus:bg-[#1f1f1f]"
                />
              </form>

              {/* Tabs */}
              <div className="mb-6 flex gap-6 border-b border-white/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative pb-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                    )}
                  </button>
                ))}
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-400">
                      RECENT SEARCHES
                    </h3>
                    <button
                      onClick={clearAllHistory}
                      className="text-xs text-gray-500 transition-colors hover:text-white"
                    >
                      Clear history
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="group flex items-center gap-2 rounded-md bg-[#1a1a1a] px-3 py-1.5 text-sm text-gray-300 transition-all hover:bg-[#222222]"
                      >
                        <span>{search}</span>
                        <X
                          className="h-3 w-3 text-gray-500 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeRecentSearch(search);
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Animated glow effect on scroll */}
        {isScrolled && !isSearchOpen && (
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
        )}
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div style={{ height: "64px" }} />

      {/* Backdrop for search (dims background) */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
