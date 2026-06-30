import React from "react";
import GenericPage from "./GenericPage";
import { Clapperboard, Sparkles, TrendingUp, Calendar } from "lucide-react";

const Anime = () => {
  return (
    <GenericPage
      icon={Clapperboard}
      title="Anime"
      description="Your ultimate anime destination. Discover seasonal anime, classic series, movies, and OVAs."
      features={[
        {
          icon: Calendar,
          title: "Seasonal Anime",
          description: "Explore the latest anime releases for the current season.",
        },
        {
          icon: TrendingUp,
          title: "Popular Anime",
          description: "Most-watched and highest-rated anime of all time.",
        },
        {
          icon: Sparkles,
          title: "Anime Movies",
          description: "Discover feature-length anime films and theatrical releases.",
        },
      ]}
    />
  );
};

export default Anime;
