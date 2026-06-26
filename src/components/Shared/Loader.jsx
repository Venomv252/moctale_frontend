import React from "react";

const Loader = ({ size = "medium", text = "Loading..." }) => {
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-12 w-12 border-4",
    large: "h-16 w-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div
        className={`animate-spin rounded-full border-t-violet-600 border-r-violet-600 border-b-transparent border-l-transparent ${
          sizeClasses[size] || sizeClasses.medium
        }`}
      />
      {text && <p className="text-gray-400">{text}</p>}
    </div>
  );
};

export default Loader;
