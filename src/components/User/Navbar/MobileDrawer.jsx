import React from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { navLinks } from "./navConfig";

const MobileDrawer = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 z-[56] h-full w-80 border-r border-white/10 bg-[#0d0d0d]/98 backdrop-blur-xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-600">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <span className="text-xl font-bold text-white">Moctale</span>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <div className="space-y-2">
                {navLinks.map((item) => {
                  const Icon = LucideIcons[item.icon];
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                        isActive
                          ? "bg-violet-600/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? "text-violet-400" : ""
                          }`}
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d0d0d]/95 p-6">
              <p className="text-center text-xs text-gray-500">
                © 2026 Moctale. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
