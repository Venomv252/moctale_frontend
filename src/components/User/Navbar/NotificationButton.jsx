import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Check } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount] = useState(3); // Mock unread count
  const dropdownRef = useRef(null);

  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: "follower",
      title: "New Follower",
      message: "John Doe started following you",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "like",
      title: "New Like",
      message: "Your review of 'Breaking Bad' got 10 likes",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "release",
      title: "New Release",
      message: "Solo Leveling Episode 12 is now available",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      type: "booking",
      title: "Booking Reminder",
      message: "Your movie starts in 2 hours",
      time: "2 days ago",
      unread: false,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </motion.span>
        )}
      </motion.button>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-0 top-full mt-2 w-96 rounded-xl border border-white/10 bg-[#0d0d0d]/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="border-b border-white/10 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">Notifications</h3>
                {unreadCount > 0 && (
                  <button className="flex items-center gap-1 text-xs text-violet-400 transition-colors hover:text-violet-300">
                    <Check className="h-3 w-3" />
                    Mark all as read
                  </button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <Link
                    key={notification.id}
                    to="/notifications"
                    onClick={() => setIsOpen(false)}
                    className={`block border-b border-white/5 p-4 transition-colors hover:bg-white/5 ${
                      notification.unread ? "bg-violet-600/5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                          notification.unread ? "bg-violet-600" : "bg-transparent"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                          {notification.message}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center text-gray-400">
                  <Bell className="mx-auto mb-3 h-10 w-10 opacity-20" />
                  <p className="text-sm">No notifications</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 p-3">
              <Link
                to="/notifications"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg py-2 text-center text-sm font-medium text-violet-400 transition-colors hover:bg-violet-600/10 hover:text-violet-300"
              >
                View All Notifications
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationButton;
