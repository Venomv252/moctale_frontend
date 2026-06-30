import React from "react";
import GenericPage from "./GenericPage";
import { Crown, Star, TrendingUp, Award } from "lucide-react";

const Top100 = () => {
  return (
    <GenericPage
      icon={Crown}
      title="Top 100"
      description="Explore the ultimate list of the top 100 movies, series, and anime of all time, as rated by the Moctale community."
      features={[
        {
          icon: Star,
          title: "All-Time Best",
          description: "The highest-rated content of all time across all categories.",
        },
        {
          icon: TrendingUp,
          title: "Trending Classics",
          description: "Timeless favorites that continue to captivate audiences.",
        },
        {
          icon: Award,
          title: "Award Winners",
          description: "Critically acclaimed content that has won major awards.",
        },
      ]}
    />
  );
};

export default Top100;
