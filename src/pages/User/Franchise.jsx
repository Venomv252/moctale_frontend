import React from "react";
import GenericPage from "./GenericPage";
import { Box, Grid3x3, Film, TrendingUp } from "lucide-react";

const Franchise = () => {
  return (
    <GenericPage
      icon={Box}
      title="Franchise"
      description="Explore popular franchises. Browse Marvel, DC, Star Wars, Harry Potter, and other beloved film series."
      features={[
        {
          icon: Grid3x3,
          title: "Complete Collections",
          description: "Watch entire franchises in chronological or release order.",
        },
        {
          icon: Film,
          title: "Cinematic Universes",
          description: "Explore interconnected movie universes like MCU and DCEU.",
        },
        {
          icon: TrendingUp,
          title: "Popular Franchises",
          description: "Discover the most loved and successful film franchises.",
        },
      ]}
    />
  );
};

export default Franchise;
