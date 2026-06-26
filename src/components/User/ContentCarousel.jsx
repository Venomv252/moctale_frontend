import React, { useRef, useState } from "react";

const ContentCarousel = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const targetScroll =
      scrollContainerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(checkScrollPosition, 300);
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-lg bg-black/80 p-3 text-white backdrop-blur-sm transition hover:bg-black/90"
          aria-label="Scroll left"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
        className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-lg bg-black/80 p-3 text-white backdrop-blur-sm transition hover:bg-black/90"
          aria-label="Scroll right"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ContentCarousel;
