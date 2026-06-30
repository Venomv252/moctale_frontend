import React from "react";
import GenericPage from "./GenericPage";
import { Bookmark, Grid3x3, Filter, Share2 } from "lucide-react";

const Watchlist = () => {
  return (
    <GenericPage
      icon={Bookmark}
      title="Watchlist"
      description="Your personal watchlist. Save movies, series, and anime you want to watch later."
      features={[
        {
          icon: Grid3x3,
          title: "Organize Content",
          description: "Sort your watchlist by category, genre, or priority.",
        },
        {
          icon: Filter,
          title: "Filter Options",
          description: "Filter your watchlist by type, status, or release date.",
        },
        {
          icon: Share2,
          title: "Share Watchlist",
          description: "Share your watchlist with friends and followers.",
        },
      ]}
    />
  );
};

export default Watchlist;
