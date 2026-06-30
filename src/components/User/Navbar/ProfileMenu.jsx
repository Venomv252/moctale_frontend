import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Star,
  Ticket,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";
import { profileMenuItems } from "./navConfig";

const iconMap = {
  User,
  Star,
  Ticket,
  Bookmark,
  Settings,
  LogOut,
};

const ProfileMenu = ({ userInitials = "U" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsOpen(false);
  };

  const handleMenuClick = (item) => {
    if (item.action === "logout") {
      handleLogout();
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Avatar */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 font-semibold text-white ring-2 ring-transparent transition-all hover:ring-violet-600/50"
        aria-label="Profile menu"
      >
        {userInitials}
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-[#0d0d0d]/95 py-2 shadow-2xl backdrop-blur-xl"
          >
            {profileMenuItems.map((item) => {
              const Icon = iconMap[item.icon];
              const isDanger = item.isDanger;

              if (item.action === "logout") {
                return (
                  <React.Fragment key={item.label}>
                    {/* Separator before logout */}
                    <div className="my-2 border-t border-white/10" />
                    
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => handleMenuClick(item)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isDanger
                          ? "text-red-400 hover:bg-red-600/10 hover:text-red-300"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </motion.button>
                  </React.Fragment>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => handleMenuClick(item)}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileMenu;
