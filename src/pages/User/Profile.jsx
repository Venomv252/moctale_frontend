import React from "react";
import GenericPage from "./GenericPage";
import { User, Edit, Camera, Settings } from "lucide-react";

const Profile = () => {
  return (
    <GenericPage
      icon={User}
      title="My Profile"
      description="View and manage your Moctale profile. Customize your bio, profile picture, and preferences."
      features={[
        {
          icon: Edit,
          title: "Edit Profile",
          description: "Update your name, bio, profile picture, and cover image.",
        },
        {
          icon: Camera,
          title: "Activity Feed",
          description: "View your reviews, ratings, and watchlist activity.",
        },
        {
          icon: Settings,
          title: "Privacy Settings",
          description: "Control who can see your profile and activity.",
        },
      ]}
    />
  );
};

export default Profile;
