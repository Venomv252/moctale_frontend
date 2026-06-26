import React from "react";
import { NavLink } from "react-router-dom";

import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { dashboardLink, sidebarLinks } from "../../../constants/sidebarLinks.js";

const Sidebar = ({ IsOpen }) => {
  const DashboardIcon = dashboardLink.icon;

  return (
    <aside
      className={`fixed left-0 top-[72px] h-[calc(100vh-72px)]  z-50 border-r border-white/10
      bg-[#050505] transition-all duration-300
      ${IsOpen ? "w-[260px]" : "w-[90px]"}`}
    >
      {/* DASHBOARD */}
      <div className="px-4 py-5">
        <NavLink
          to={dashboardLink.path}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-xl px-4 py-3 transition-all
            ${
              isActive
                ? "bg-violet-700 text-white"
                : "text-gray-300 hover:bg-white/10"
            }`
          }
        >
          <DashboardIcon />

          {IsOpen && <span className="font-medium">{dashboardLink.name}</span>}
        </NavLink>
      </div>

      {/* MENU */}
      <div className="scrollbar-hide h-[calc(100vh-180px)] overflow-y-auto scrollbar-hide px-4">
        {sidebarLinks.map((section) => (
          <div key={section.section} className="mb-8">
            {IsOpen && (
              <h3 className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-500">
                {section.section}
              </h3>
            )}

            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 rounded-xl px-4 py-3 transition-all
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5"
                      }`
                    }
                  >
                    <Icon />

                    {IsOpen && (
                      <span className="text-sm font-medium">{item.name}</span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
