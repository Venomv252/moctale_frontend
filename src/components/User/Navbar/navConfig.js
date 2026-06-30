// Navigation configuration for Moctale Premium Navbar
export const navLinks = [
  {
    id: "explore",
    name: "Explore",
    path: "/explore",
    icon: "Compass",
    description: "Discover trending content",
  },
  {
    id: "schedule",
    name: "Schedule",
    path: "/schedule",
    icon: "Calendar",
    description: "Upcoming releases",
  },
  {
    id: "spaces",
    name: "Spaces",
    path: "/spaces",
    icon: "MessageSquare",
    description: "Community discussions",
  },
  {
    id: "collections",
    name: "Collections",
    path: "/collections",
    icon: "FolderHeart",
    description: "Browse curated collections",
  },
];

export const profileMenuItems = [
  {
    label: "My Profile",
    path: "/profile",
    icon: "User",
  },
  {
    label: "My Reviews",
    path: "/my-reviews",
    icon: "Star",
  },
  {
    label: "My Bookings",
    path: "/bookings",
    icon: "Ticket",
  },
  {
    label: "Watchlist",
    path: "/watchlist",
    icon: "Bookmark",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "Settings",
  },
  {
    label: "Logout",
    action: "logout",
    icon: "LogOut",
    isDanger: true,
  },
];
