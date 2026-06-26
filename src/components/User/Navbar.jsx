import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: isAuthenticated ? "/home" : "/" },
    { name: "Movies", path: "/movies" },
    { name: "Series", path: "/series" },
    { name: "Anime", path: "/anime" },
    { name: "Now Showing", path: "/now-showing" },
  ];
  const token = localStorage.getItem("token");

  const adminToken = localStorage.getItem("adminToken");

  const redirectingRoutes = adminToken ? "/admin" : token ? "/home" : "/";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 shadow-lg backdrop-blur-md"
        : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}

          <Link to={redirectingRoutes} className="flex items-center h-full">
            <div className="w-[105px] h-[35px] sm:w-[120px] sm:h-[40px] flex-shrink-0 flex-grow-0">
              <img
                alt="Moctale Logo"
                fetchPriority="high"
                width="118"
                height="30"
                decoding="async"
                data-nimg="1"
                className="object-contain select-none pointer-events-none"
                src="https://www.moctale.in/Moctale-logo-HQ.svg"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="hidden rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20 md:block">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Sign In Button */}
            <Link
              to="/login"
              className="hidden rounded-lg bg-violet-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-violet-700 md:block"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-300 transition hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="mt-2 rounded-lg bg-violet-600 px-6 py-2 text-center text-sm font-medium text-white transition hover:bg-violet-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
