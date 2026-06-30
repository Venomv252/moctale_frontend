import React from "react";
import GenericPage from "./GenericPage";
import { Star, Edit, Trash2, TrendingUp } from "lucide-react";

const MyReviews = () => {
  return (
    <GenericPage
      icon={Star}
      title="My Reviews"
      description="Manage your reviews and ratings. View, edit, or delete your content reviews."
      features={[
        {
          icon: Edit,
          title: "Edit Reviews",
          description: "Update your reviews anytime with new thoughts and insights.",
        },
        {
          icon: Trash2,
          title: "Delete Reviews",
          description: "Remove reviews you no longer want to keep.",
        },
        {
          icon: TrendingUp,
          title: "Review Analytics",
          description: "See how many likes and comments your reviews have received.",
        },
      ]}
    />
  );
};

export default MyReviews;
