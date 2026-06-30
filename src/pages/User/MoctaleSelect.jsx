import React from "react";
import GenericPage from "./GenericPage";
import { Star, Sparkles, Crown, Heart } from "lucide-react";

const MoctaleSelect = () => {
  return (
    <GenericPage
      icon={Star}
      title="Moctale Select"
      description="Premium curated collection of exceptional content. Handpicked movies, series, and anime that define excellence."
      features={[
        {
          icon: Crown,
          title: "Editor's Choice",
          description: "Carefully selected by our expert team for quality and impact.",
        },
        {
          icon: Sparkles,
          title: "Must-Watch Classics",
          description: "Timeless content that every film lover should experience.",
        },
        {
          icon: Heart,
          title: "Hidden Gems",
          description: "Underrated masterpieces waiting to be discovered.",
        },
      ]}
    />
  );
};

export default MoctaleSelect;
