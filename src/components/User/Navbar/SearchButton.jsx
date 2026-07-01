import React from "react";
import { Search } from "lucide-react";

const SearchButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white"
      aria-label="Search"
    >
      <Search className="h-5 w-5" />
    </button>
  );
};

export default SearchButton;
