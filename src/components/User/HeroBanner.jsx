import React from "react";

const HeroBanner = ({ content }) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={content.banner}
          alt={content.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1920x1080/1a1a1a/666?text=Banner";
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Type Badge */}
            <div className="mb-4 inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-sm font-bold uppercase text-white">
              {content.type}
            </div>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            {/* Tagline */}
            {content.tagline && (
              <p className="mb-6 text-lg text-gray-300 md:text-xl">
                {content.tagline}
              </p>
            )}

            {/* Meta Info */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
              {/* Rating */}
              {content.rating && (
                <div className="flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-bold text-white">
                    {content.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-400">IMDb</span>
                </div>
              )}

              {/* Release Year */}
              {content.releaseYear && (
                <span className="rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
                  {content.releaseYear}
                </span>
              )}

              {/* Duration */}
              {content.duration && (
                <span className="rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
                  {content.duration}
                </span>
              )}
            </div>

            {/* Genres */}
            {content.genres && content.genres.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {content.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {content.description && (
              <p className="mb-8 text-gray-300 md:text-lg">
                {content.description}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 md:px-8 md:py-4">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch Trailer
              </button>

              <button className="flex items-center gap-2 rounded-lg border-2 border-white bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 md:px-8 md:py-4">
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
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
