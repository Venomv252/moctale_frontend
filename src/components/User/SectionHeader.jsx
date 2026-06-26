import React from "react";

const SectionHeader = ({ title, subtitle, viewAllLink }) => {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <a
          href={viewAllLink}
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          View All →
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
