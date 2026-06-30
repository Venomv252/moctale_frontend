import React from "react";
import GenericPage from "./GenericPage";
import { Film, Sparkles, Ghost, Heart } from "lucide-react";

const Genre = () => {
  return (
    <GenericPage
      icon={Film}
      title="Genre"
      description="Explore content by genre. Find action, comedy, horror, romance, sci-fi, thriller, and more."
      features={[
        {
          icon: Sparkles,
          title: "Popular Genres",
          description: "Browse the most popular genres including Action, Drama, and Comedy.",
        },
        {
          icon: Ghost,
          title: "Niche Genres",
          description: "Discover niche and cult genres like Horror, Mystery, and Supernatural.",
        },
        {
          icon: Heart,
          title: "Your Favorites",
          description: "Get personalized genre recommendations based on your watch history.",
        },
      ]}
    />
  );
};

export default Genre;
