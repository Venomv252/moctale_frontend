import React from "react";

const InterestCard = ({ content, onClick }) => {
  const typeBadgeColors = {
    movie: "bg-blue-600",
    series: "bg-green-600",
    anime: "bg-pink-600",
  };

  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-[#0d0d0d] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ width: "240px" }}
    >
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={content.poster}
          alt={content.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/240x360/1a1a1a/666?text=No+Image";
          }}
        />

        {/* Type Badge */}
        <div
          className={`absolute left-2 top-2 rounded-md px-2 py-1 text-xs font-bold uppercase text-white ${
            typeBadgeColors[content.type] || "bg-gray-600"
          }`}
        >
          {content.type}
        </div>

        {/* Interest Badge */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-red-600/90 px-2 py-1 backdrop-blur-sm">
          <span className="text-base">❤️</span>
          <span className="text-xs font-bold text-white">
            {content.interestCount >= 1000
              ? `${(content.interestCount / 1000).toFixed(1)}k`
              : content.interestCount}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content Info */}
      <div className="p-3">
        <h3 className="mb-1 line-clamp-1 text-base font-bold text-white" title={content.title}>
          {content.title}
        </h3>

        {/* Rating and Year */}
        <div className="mb-2 flex items-center gap-2 text-xs">
          {content.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold text-white">
                {content.rating.toFixed(1)}
              </span>
            </div>
          )}
          <span className="text-gray-400">{content.releaseYear}</span>
        </div>

        {/* Genres */}
        {content.genres && content.genres.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {content.genres.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-400"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Action */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black via-black/95 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
        <button className="w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700">
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default InterestCard;
