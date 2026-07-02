import React from "react";

const ReviewCard = ({ review, onClick }) => {
  const typeBadgeColors = {
    movie: "bg-blue-600",
    series: "bg-green-600",
    anime: "bg-pink-600",
  };

  return (
    <div
      onClick={onClick}
      className="group flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:border-violet-600/50 hover:shadow-xl"
      style={{ width: "380px" }}
    >
      <div className="flex gap-4 p-4">
        {/* Poster Thumbnail */}
        <div className="relative flex-shrink-0 overflow-hidden rounded-lg" style={{ width: "80px" }}>
          <img
            src={review.poster}
            alt={review.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            style={{ aspectRatio: "2/3" }}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='120'%3E%3Crect width='80' height='120' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E";
            }}
          />
          {/* Type Badge */}
          <div
            className={`absolute bottom-1 left-1 rounded px-1.5 py-0.5 text-xs font-bold uppercase text-white ${
              typeBadgeColors[review.type] || "bg-gray-600"
            }`}
          >
            {review.type}
          </div>
        </div>

        {/* Review Content */}
        <div className="flex-1">
          {/* Content Title and Rating */}
          <div className="mb-2">
            <h3 className="line-clamp-1 text-sm font-bold text-white" title={review.title}>
              {review.title}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
              <span>{review.releaseYear}</span>
              {review.rating && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold text-white">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Reviewer Info */}
          <div className="mb-2 flex items-center gap-2">
            {/* Avatar */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              {review.reviewerAvatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {review.reviewerName}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{review.reviewDate}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.reviewRating / 2
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="line-clamp-3 text-sm text-gray-300">
            {review.reviewText}
          </p>

          {/* Likes */}
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
            <button className="flex items-center gap-1 transition hover:text-red-400">
              <span>❤️</span>
              <span>{review.likes}</span>
            </button>
            <button className="transition hover:text-violet-400">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
