import React from "react";
import GenericPage from "./GenericPage";
import { Trophy, Award, Star, Crown } from "lucide-react";

const AwardWinners = () => {
  return (
    <GenericPage
      icon={Trophy}
      title="Award Winners"
      description="Explore critically acclaimed content. Browse Oscar winners, Emmy award-winning series, and more."
      features={[
        {
          icon: Award,
          title: "Major Awards",
          description: "Oscars, Emmys, Golden Globes, and other prestigious award winners.",
        },
        {
          icon: Star,
          title: "Critics' Choice",
          description: "Highly rated by critics and film festivals worldwide.",
        },
        {
          icon: Crown,
          title: "Festival Winners",
          description: "Award-winning films from Cannes, Sundance, and other major festivals.",
        },
      ]}
    />
  );
};

export default AwardWinners;
