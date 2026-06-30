import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const NavItem = ({ item }) => {
  const location = useLocation();
  const Icon = LucideIcons[item.icon];
  const isActive = location.pathname === item.path;

  return (
    <NavLink
      to={item.path}
      className={({ isActive: routeActive }) => {
        const active = routeActive || isActive;
        return `group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          active
            ? "text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`;
      }}
    >
      {({ isActive: routeActive }) => {
        const active = routeActive || isActive;
        return (
          <>
            {Icon && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
            )}
            <span className="text-sm font-medium">{item.name}</span>
            
            {/* Active Indicator */}
            {active && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-violet-600"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            
            {/* Hover Glow */}
            {!active && (
              <div className="absolute inset-0 -z-10 rounded-lg bg-violet-600/0 transition-colors duration-300 group-hover:bg-violet-600/10" />
            )}
          </>
        );
      }}
    </NavLink>
  );
};

export default NavItem;
