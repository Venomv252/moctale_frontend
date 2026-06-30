import React from "react";
import GenericPage from "./GenericPage";
import { Settings as SettingsIcon, Bell, Lock, Palette } from "lucide-react";

const Settings = () => {
  return (
    <GenericPage
      icon={SettingsIcon}
      title="Settings"
      description="Manage your account settings and preferences. Customize notifications, privacy, and app appearance."
      features={[
        {
          icon: Bell,
          title: "Notifications",
          description: "Control email and push notifications for reviews, bookings, and updates.",
        },
        {
          icon: Lock,
          title: "Privacy & Security",
          description: "Manage password, two-factor authentication, and privacy settings.",
        },
        {
          icon: Palette,
          title: "Appearance",
          description: "Customize theme, language, and display preferences.",
        },
      ]}
    />
  );
};

export default Settings;
