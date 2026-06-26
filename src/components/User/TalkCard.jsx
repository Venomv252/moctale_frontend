import React from "react";

const TalkCard = ({ content, onClick }) => {
  const typeBadgeColors = {
    movie: "bg-blue-600",
    series: "bg-green-600",
    anime: "bg-pink-600",
  };

  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-[#0d0d0d] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ width: "280px" }}
    >
      {/* Poster Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={content.poster}
          alt={content.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/280x370/1a1a1a/666?text=No+Image";
          }}
        />

        {/* Type Badge */}
        <div
          className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-bold uppercase text-white ${
            typeBadgeColors[content.type] || "bg-gray-600"
          }`}
        >
          {content.type}
        </div>

        {/* Talk Count Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-black/70 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-lg">💬</span>
          <span className="text-sm font-bold text-white">
            {content.talkCount >= 1000
              ? `${(content.talkCount / 1000).toFixed(1)}k`
              : content.talkCount}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content Info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="mb-1 text-lg font-bold text-white" title={content.title}>
          {content.title}
        </h3>

        {/* Rating and Year */}
        <div className="mb-2 flex items-center gap-3 text-sm">
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

        {/* Description */}
        {content.description && (
          <p className="line-clamp-2 text-sm text-gray-300">
            {content.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TalkCard;
