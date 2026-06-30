import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Ticket,
  Bookmark,
  Grid3x3,
  Bell,
  Search,
} from "lucide-react";
import NotificationBadge from "./NotificationBadge";
import ProfileMenu from "./ProfileMenu";

// IconButton component defined outside render
// eslint-disable-next-line no-unused-vars
const IconButton = ({ icon: IconComponent, label, badge, onClick, to }) => {
  const button = (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:scale-105 hover:text-white"
      aria-label={label}
    >
      <IconComponent className="h-5 w-5" />
    </button>
  );

  if (to) {
    return (
      <Link to={to} aria-label={label}>
        {badge ? <NotificationBadge count={badge}>{button}</NotificationBadge> : button}
      </Link>
    );
  }

  return badge ? (
    <NotificationBadge count={badge}>{button}</NotificationBadge>
  ) : (
    button
  );
};

const NavIconGroup = ({ isAuthenticated }) => {
  const [notificationCount] = useState(3); // Mock notification count
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center gap-6">
      {/* Search */}
      <div className="relative">
        {showSearch ? (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={() => setShowSearch(false)}
              className="h-10 w-64 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-600 focus:bg-white/10"
            />
          </div>
        ) : (
          <IconButton
            icon={Search}
            label="Search"
            onClick={() => setShowSearch(true)}
          />
        )}
      </div>

      {isAuthenticated ? (
        <>
          {/* Calendar */}
          <IconButton icon={Calendar} label="Calendar" to="/calendar" />

          {/* Tickets */}
          <IconButton icon={Ticket} label="Tickets" to="/tickets" />

          {/* Bookmarks */}
          <IconButton icon={Bookmark} label="Bookmarks" to="/watchlist" />

          {/* Apps/Grid */}
          <IconButton icon={Grid3x3} label="Apps" to="/apps" />

          {/* Notifications */}
          <IconButton
            icon={Bell}
            label="Notifications"
            badge={notificationCount}
            to="/notifications"
          />

          {/* Profile */}
          <ProfileMenu userInitials="U" />
        </>
      ) : (
        <>
          {/* Sign In Button */}
          <Link
            to="/login"
            className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-700 hover:scale-105"
          >
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default NavIconGroup;
