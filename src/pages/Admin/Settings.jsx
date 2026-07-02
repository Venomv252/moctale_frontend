import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Palette,
  Database,
  Mail,
  Globe,
  Lock,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
} from "lucide-react";
import toast from "react-hot-toast";

const AdminSettings = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Profile settings
  const [profileSettings, setProfileSettings] = useState({
    firstName: "Aryan",
    lastName: "Admin",
    email: "admin@moctale.com",
    username: "admin",
    phone: "9999999999",
  });

  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    loginNotifications: true,
  });

  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newUserRegistration: true,
    contentUpdates: true,
    reviewNotifications: true,
    systemAlerts: true,
  });

  // Appearance settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "dark",
    sidebarCollapsed: false,
    compactMode: false,
    primaryColor: "#740DF6",
  });

  // System settings
  const [systemSettings, setSystemSettings] = useState({
    siteName: "Moctale",
    siteDescription: "Movie Discovery Platform",
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    contentModeration: true,
  });

  // Tabs configuration
  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    
    { id: "system", label: "System", icon: Database },
  ];

  // Handle profile update
  const handleProfileUpdate = () => {
    toast.success("Profile updated successfully!");
    console.log("Profile settings:", profileSettings);
  };

  // Handle security update
  const handleSecurityUpdate = () => {
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Security settings updated!");
    setSecuritySettings({
      ...securitySettings,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Handle notification update
  const handleNotificationUpdate = () => {
    toast.success("Notification preferences updated!");
    console.log("Notification settings:", notificationSettings);
  };

  // Handle appearance update
  const handleAppearanceUpdate = () => {
    toast.success("Appearance settings updated!");
    console.log("Appearance settings:", appearanceSettings);
  };

  // Handle system update
  const handleSystemUpdate = () => {
    toast.success("System settings updated!");
    console.log("System settings:", systemSettings);
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Settings</h1>
        <p className="mt-2 text-gray-400">
          Manage your admin account and system preferences
        </p>
      </div>

      {/* Tab Navigation - Horizontal */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex gap-2 border-b border-white/10 pb-1 md:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-t-lg px-4 py-3 text-sm font-medium transition-all md:px-6 md:text-base ${
                  activeTab === tab.id
                    ? "border-b-2 border-violet-600 bg-violet-600/10 text-violet-400"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fadeIn">
        <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Profile Settings
                </h2>
                <p className="text-gray-400">
                  Update your personal information and contact details
                </p>
              </div>

              {/* Profile Form */}
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileSettings.firstName}
                      onChange={(e) =>
                        setProfileSettings({
                          ...profileSettings,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileSettings.lastName}
                      onChange={(e) =>
                        setProfileSettings({
                          ...profileSettings,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileSettings.email}
                    onChange={(e) =>
                      setProfileSettings({
                        ...profileSettings,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Username
                    </label>
                    <input
                      type="text"
                      value={profileSettings.username}
                      onChange={(e) =>
                        setProfileSettings({
                          ...profileSettings,
                          username: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileSettings.phone}
                      onChange={(e) =>
                        setProfileSettings({
                          ...profileSettings,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                  </div>
                </div>

                <button
                  onClick={handleProfileUpdate}
                  className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-violet-700"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Security Settings
                </h2>
                <p className="text-gray-400">
                  Manage your password and security preferences
                </p>
              </div>

              {/* Change Password */}
              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Change Password
                </h3>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={securitySettings.currentPassword}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          currentPassword: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 pr-12 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={securitySettings.newPassword}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          newPassword: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 pr-12 text-white outline-none transition-all focus:border-violet-600/50"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={securitySettings.confirmPassword}
                    onChange={(e) =>
                      setSecuritySettings({
                        ...securitySettings,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                  />
                </div>
              </div>

              {/* Additional Security Options */}
              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Additional Security
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-gray-400">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSecuritySettings({
                        ...securitySettings,
                        twoFactorAuth: !securitySettings.twoFactorAuth,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      securitySettings.twoFactorAuth
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.twoFactorAuth
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Login Notifications</p>
                    <p className="text-sm text-gray-400">
                      Get notified when someone logs into your account
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSecuritySettings({
                        ...securitySettings,
                        loginNotifications: !securitySettings.loginNotifications,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      securitySettings.loginNotifications
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        securitySettings.loginNotifications
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={handleSecurityUpdate}
                className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-violet-700"
              >
                <Save className="h-4 w-4" />
                Update Security Settings
              </button>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Notification Preferences
                </h2>
                <p className="text-gray-400">
                  Choose what notifications you want to receive
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">Email Notifications</p>
                    <p className="text-sm text-gray-400">
                      Receive email updates about your account
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        emailNotifications: !notificationSettings.emailNotifications,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSettings.emailNotifications
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings.emailNotifications
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">
                      New User Registration
                    </p>
                    <p className="text-sm text-gray-400">
                      Get notified when a new user signs up
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        newUserRegistration: !notificationSettings.newUserRegistration,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSettings.newUserRegistration
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings.newUserRegistration
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">Content Updates</p>
                    <p className="text-sm text-gray-400">
                      Alerts when content is added or modified
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        contentUpdates: !notificationSettings.contentUpdates,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSettings.contentUpdates
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings.contentUpdates
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">Review Notifications</p>
                    <p className="text-sm text-gray-400">
                      Get notified about new reviews
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        reviewNotifications: !notificationSettings.reviewNotifications,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSettings.reviewNotifications
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings.reviewNotifications
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">System Alerts</p>
                    <p className="text-sm text-gray-400">
                      Important system and security alerts
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings({
                        ...notificationSettings,
                        systemAlerts: !notificationSettings.systemAlerts,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notificationSettings.systemAlerts
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings.systemAlerts
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={handleNotificationUpdate}
                className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-violet-700"
              >
                <Save className="h-4 w-4" />
                Save Preferences
              </button>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === "appearance" && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Appearance Settings
                </h2>
                <p className="text-gray-400">
                  Customize the look and feel of your admin panel
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Theme
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          theme: "dark",
                        })
                      }
                      className={`rounded-lg border-2 p-4 transition-all ${
                        appearanceSettings.theme === "dark"
                          ? "border-violet-600 bg-violet-600/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="mb-2 text-center text-2xl">🌙</div>
                      <p className="text-center font-medium text-white">Dark</p>
                    </button>

                    <button
                      onClick={() =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          theme: "light",
                        })
                      }
                      className={`rounded-lg border-2 p-4 transition-all ${
                        appearanceSettings.theme === "light"
                          ? "border-violet-600 bg-violet-600/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="mb-2 text-center text-2xl">☀️</div>
                      <p className="text-center font-medium text-white">Light</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={appearanceSettings.primaryColor}
                      onChange={(e) =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          primaryColor: e.target.value,
                        })
                      }
                      className="h-12 w-20 cursor-pointer rounded-lg border border-white/10 bg-zinc-800"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={appearanceSettings.primaryColor}
                        onChange={(e) =>
                          setAppearanceSettings({
                            ...appearanceSettings,
                            primaryColor: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <p className="font-medium text-white">Sidebar Collapsed</p>
                    <p className="text-sm text-gray-400">
                      Keep sidebar collapsed by default
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setAppearanceSettings({
                        ...appearanceSettings,
                        sidebarCollapsed: !appearanceSettings.sidebarCollapsed,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      appearanceSettings.sidebarCollapsed
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        appearanceSettings.sidebarCollapsed
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Compact Mode</p>
                    <p className="text-sm text-gray-400">
                      Reduce spacing for more content
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setAppearanceSettings({
                        ...appearanceSettings,
                        compactMode: !appearanceSettings.compactMode,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      appearanceSettings.compactMode
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        appearanceSettings.compactMode
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAppearanceUpdate}
                className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-violet-700"
              >
                <Save className="h-4 w-4" />
                Save Appearance
              </button>
            </div>
          )}

          {/* System Tab */}
          {activeTab === "system" && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  System Settings
                </h2>
                <p className="text-gray-400">
                  Configure platform-wide settings and features
                </p>
              </div>

              {/* Site Information */}
              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Site Information
                </h3>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={systemSettings.siteName}
                    onChange={(e) =>
                      setSystemSettings({
                        ...systemSettings,
                        siteName: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Site Description
                  </label>
                  <textarea
                    value={systemSettings.siteDescription}
                    onChange={(e) =>
                      setSystemSettings({
                        ...systemSettings,
                        siteDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white outline-none transition-all focus:border-violet-600/50"
                  />
                </div>
              </div>

              {/* Platform Controls */}
              <div className="space-y-4 rounded-lg border border-white/5 bg-zinc-800/50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Platform Controls
                </h3>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">Maintenance Mode</p>
                    <p className="text-sm text-gray-400">
                      Temporarily disable public access
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSystemSettings({
                        ...systemSettings,
                        maintenanceMode: !systemSettings.maintenanceMode,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      systemSettings.maintenanceMode
                        ? "bg-orange-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        systemSettings.maintenanceMode
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">Allow Registration</p>
                    <p className="text-sm text-gray-400">
                      Enable new user sign-ups
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSystemSettings({
                        ...systemSettings,
                        allowRegistration: !systemSettings.allowRegistration,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      systemSettings.allowRegistration
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        systemSettings.allowRegistration
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="font-medium text-white">
                      Email Verification Required
                    </p>
                    <p className="text-sm text-gray-400">
                      Users must verify email before access
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSystemSettings({
                        ...systemSettings,
                        requireEmailVerification:
                          !systemSettings.requireEmailVerification,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      systemSettings.requireEmailVerification
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        systemSettings.requireEmailVerification
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Content Moderation</p>
                    <p className="text-sm text-gray-400">
                      Review user-generated content before publishing
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSystemSettings({
                        ...systemSettings,
                        contentModeration: !systemSettings.contentModeration,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      systemSettings.contentModeration
                        ? "bg-violet-600"
                        : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        systemSettings.contentModeration
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={handleSystemUpdate}
                className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 font-medium text-white transition-all hover:bg-violet-700"
              >
                <Save className="h-4 w-4" />
                Update System Settings
              </button>

              {/* Danger Zone */}
              <div className="rounded-lg border-2 border-red-600/30 bg-red-600/5 p-6">
                <h3 className="mb-2 text-lg font-semibold text-red-400">
                  Danger Zone
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  These actions are irreversible. Please be certain.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-lg border border-red-600/50 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-600/20">
                    Clear Cache
                  </button>
                  <button className="rounded-lg border border-red-600/50 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-600/20">
                    Reset Statistics
                  </button>
                  <button className="rounded-lg border border-red-600/50 bg-red-600/10 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-600/20">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
