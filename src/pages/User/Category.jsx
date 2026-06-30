import React from "react";
import GenericPage from "./GenericPage";
import { Triangle, Film, Tv, Clapperboard } from "lucide-react";

const Category = () => {
  return (
    <GenericPage
      icon={Triangle}
      title="Category"
      description="Browse content by category. Explore movies, series, anime, and more organized for easy discovery."
      features={[
        {
          icon: Film,
          title: "Movies",
          description: "Discover feature films, documentaries, and theatrical releases.",
        },
        {
          icon: Tv,
          title: "Series",
          description: "Explore TV shows, limited series, and ongoing seasons.",
        },
        {
          icon: Clapperboard,
          title: "Anime",
          description: "Browse anime series, movies, OVAs, and seasonal releases.",
        },
      ]}
    />
  );
};

export default Category;
