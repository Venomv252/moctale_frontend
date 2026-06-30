import React from "react";
import GenericPage from "./GenericPage";
import { Globe, MapPin, Flag, Sparkles } from "lucide-react";

const Country = () => {
  return (
    <GenericPage
      icon={Globe}
      title="Country"
      description="Explore content from around the world. Discover movies, series, and anime from different countries and cultures."
      features={[
        {
          icon: MapPin,
          title: "Regional Content",
          description: "Browse content from Hollywood, Bollywood, K-Drama, and more.",
        },
        {
          icon: Flag,
          title: "International Films",
          description: "Discover award-winning international cinema and hidden gems.",
        },
        {
          icon: Sparkles,
          title: "Cultural Diversity",
          description: "Explore stories from diverse cultures and perspectives.",
        },
      ]}
    />
  );
};

export default Country;
