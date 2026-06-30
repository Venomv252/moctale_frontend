import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Activity,
  Calendar,
  Crown,
  Triangle,
  Film,
  Globe,
  Languages,
  Users,
  Trophy,
  Star,
  Clapperboard,
  Box
} from "lucide-react";

const GenreExplorerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Genre categories with structured rows
  const followingActivity = {
    id: "following",
    name: "Following Activity",
    icon: Activity,
    path: "/following"
  };

  const categoryRows = [
    // Row 1: Monthly Ranking, Top 100
    [
      {
        id: "monthly",
        name: "Monthly Ranking",
        icon: Calendar,
        path: "/monthly-ranking"
      },
      {
        id: "top100",
        name: "Top 100",
        icon: Crown,
        path: "/top-100"
      },
    ],
    // Row 2: Category, Genre, Country
    [
      {
        id: "category",
        name: "Category",
        icon: Triangle,
        path: "/category"
      },
      {
        id: "genre",
        name: "Genre",
        icon: Film,
        path: "/genres"
      },
      {
        id: "country",
        name: "Country",
        icon: Globe,
        path: "/country"
      },
    ],
    // Row 3: Language, Family Friendly, Award Winners
    [
      {
        id: "language",
        name: "Language",
        icon: Languages,
        path: "/language"
      },
      {
        id: "family",
        name: "Family Friendly",
        icon: Users,
        path: "/family-friendly"
      },
      {
        id: "awards",
        name: "Award Winners",
        icon: Trophy,
        path: "/award-winners"
      },
    ],
    // Row 4: Moctale Select, Anime, Franchise
    [
      {
        id: "moctale",
        name: "Moctale Select",
        icon: Star,
        path: "/moctale-select"
      },
      {
        id: "anime",
        name: "Anime",
        icon: Clapperboard,
        path: "/anime"
      },
      {
        id: "franchise",
        name: "Franchise",
        icon: Box,
        path: "/franchise"
      },
    ],
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Genre Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white"
        aria-label="Browse Genres"
      >
        <LayoutGrid className="h-5 w-5" />
      </button>

      {/* Genre Popup */}
      {isOpen && (
        <div
          className="absolute left-1/2 top-full mt-2 w-[400px] -translate-x-1/2 rounded-xl border 
          border-white/10 bg-[#0a0a0a]/98 p-3 shadow-2xl backdrop-blur-xl"
          style={{ zIndex: 100 }}
        >
          <div className="space-y-2.5">
            {/* Following Activity - Full Width */}
            <Link
              to={followingActivity.path}
              onClick={() => setIsOpen(false)}
              className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-white/5 bg-[#0d0d0d] p-4 transition-all duration-200 hover:border-violet-600/50 hover:bg-[#111111]"
            >
              <div className="flex h-5 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-200 group-hover:scale-110 group-hover:bg-violet-600/20">
                <Activity className="h-5 w-5 text-gray-300 transition-colors duration-200 group-hover:text-violet-400" />
              </div>
              <span className="text-center text-xs font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
                {followingActivity.name}
              </span>
            </Link>

            {/* Category Rows */}
            {categoryRows.map((row, rowIndex) => {
              const gridCols = row.length === 2 ? "grid-cols-2" : "grid-cols-3";
              return (
                <div key={rowIndex} className={`grid ${gridCols} gap-2.5`}>
                  {row.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.id}
                        to={category.path}
                        onClick={() => setIsOpen(false)}
                        className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-white/5 bg-[#0d0d0d] p-4 transition-all duration-200 hover:border-violet-600/50 hover:bg-[#111111]"
                      >
                        <div className="flex h-8 w-10 
                        items-center justify-center 
                        rounded-lg bg-white/5 transition-all 
                        duration-200 group-hover:scale-110 group-hover:bg-violet-600/20">
                          <Icon className="h-5 w-5 text-gray-300 transition-colors duration-200 group-hover:text-violet-400" />
                        </div>
                        <span className="text-center text-xs font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
                          {category.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreExplorerButton;
