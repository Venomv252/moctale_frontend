import React from "react";
import GenericPage from "./GenericPage";
import { Bell, Users, Heart, MessageSquare } from "lucide-react";

const Notifications = () => {
  return (
    <GenericPage
      icon={Bell}
      title="Notifications"
      description="Stay updated with all your notifications. New followers, likes, comments, and booking reminders in one place."
      features={[
        {
          icon: Users,
          title: "Social Activity",
          description: "Get notified when someone follows you or engages with your content.",
        },
        {
          icon: Heart,
          title: "Content Updates",
          description: "Receive alerts about new releases and updates for your watchlist.",
        },
        {
          icon: MessageSquare,
          title: "Comments & Replies",
          description: "Stay in the loop with replies to your reviews and posts.",
        },
      ]}
    />
  );
};

export default Notifications;
