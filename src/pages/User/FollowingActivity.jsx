import React from "react";
import GenericPage from "./GenericPage";
import { Activity, Users, Bell, TrendingUp } from "lucide-react";

const FollowingActivity = () => {
  return (
    <GenericPage
      icon={Activity}
      title="Following Activity"
      description="Stay updated with the latest activity from users you follow. See their reviews, collections, and watchlist updates in real-time."
      features={[
        {
          icon: Users,
          title: "Friend Updates",
          description: "See what your friends are watching, reviewing, and adding to their collections.",
        },
        {
          icon: Bell,
          title: "Real-time Notifications",
          description: "Get instant updates when followed users post new reviews or create collections.",
        },
        {
          icon: TrendingUp,
          title: "Activity Feed",
          description: "Browse a personalized feed of activity from your network.",
        },
      ]}
    />
  );
};

export default FollowingActivity;
