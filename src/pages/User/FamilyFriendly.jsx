import React from "react";
import GenericPage from "./GenericPage";
import { Users, Heart, Shield, Sparkles } from "lucide-react";

const FamilyFriendly = () => {
  return (
    <GenericPage
      icon={Users}
      title="Family Friendly"
      description="Discover content suitable for all ages. Find movies and series perfect for family viewing."
      features={[
        {
          icon: Shield,
          title: "Safe Content",
          description: "Curated selection of age-appropriate content for children and families.",
        },
        {
          icon: Heart,
          title: "Feel-Good Stories",
          description: "Heartwarming movies and series that the whole family can enjoy.",
        },
        {
          icon: Sparkles,
          title: "Educational Content",
          description: "Entertaining content that also teaches valuable lessons.",
        },
      ]}
    />
  );
};

export default FamilyFriendly;
