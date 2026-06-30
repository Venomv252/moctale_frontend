import React from "react";
import GenericPage from "./GenericPage";
import { Calendar, TrendingUp, Star, Award } from "lucide-react";

const MonthlyRanking = () => {
  return (
    <GenericPage
      icon={Calendar}
      title="Monthly Ranking"
      description="Discover the top-rated movies, series, and anime of the month. Rankings based on user reviews and popularity."
      features={[
        {
          icon: TrendingUp,
          title: "Trending This Month",
          description: "See what's gaining popularity this month across all categories.",
        },
        {
          icon: Star,
          title: "Highest Rated",
          description: "Browse content with the best ratings from our community this month.",
        },
        {
          icon: Award,
          title: "Most Discussed",
          description: "Discover what everyone is talking about in Spaces this month.",
        },
      ]}
    />
  );
};

export default MonthlyRanking;
