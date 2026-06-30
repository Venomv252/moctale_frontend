import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
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
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "border-b border-white/10 bg-[#0d0d0d]/95 shadow-xl backdrop-blur-xl"
          : "border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-lg"
          }`}
        style={{ height: "64px" }}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="flex h-full items-center justify-between">
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
              {/* Navigation Items - Desktop only */}
              <nav className="hidden items-center gap-2 lg:flex">
                {navLinks.map((item) => {
                  const Icon = LucideIcons[item.icon];
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 ${isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {Icon && (
                        <Icon
                          className={`h-5 w-5 transition-transform duration-200 ${isActive ? "" : "group-hover:scale-110 group-hover:rotate-3"
                            }`}
                        />
                      )}

                      {/* Show text only for active item */}
                      {isActive && (
                        <span className="text-sm font-medium">{item.name}</span>
                      )}

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -bottom-[14px] left-0 right-0 h-[2px] 
                        bg-gradient-to-r from-transparent via-[#740DF6] 
                        to-transparent transition-all duration-500 ease-in-out" />
                      )}

                      {/* Hover Glow */}
                      {!isActive && (
                        <div className="absolute inset-0 -z-10 rounded-lg bg-violet-600/0 transition-colors duration-300 group-hover:bg-violet-600/10" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Divider - Desktop only */}
              {/* <div className="hidden h-6 w-px bg-white/10 lg:block" /> */}

              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {/* Genre Explorer - Desktop only */}
                <div className="hidden sm:block">
                  <GenreExplorerButton />
                </div>

                {/* Search - Always visible */}
                <SearchButton />

                {isAuthenticated ? (
                  <>
                    {/* Notifications - Desktop only */}
                    <div className="hidden sm:block">
                      <NotificationButton />
                    </div>

                    {/* Profile - Always visible when authenticated */}
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
              </div>
            </div>
          </div>
        </div>

        {/* Animated glow effect on scroll */}
        {isScrolled && (
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
        )}
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
};

export default Navbar;
