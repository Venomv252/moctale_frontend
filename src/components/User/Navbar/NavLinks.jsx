import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "./navConfig";

const NavLinks = () => {
  const location = useLocation();

  return (
    <nav className="hidden items-center gap-10 lg:flex xl:gap-12">
      {navLinks.map((link) => {
        const isActive =
          location.pathname === link.path ||
          (link.path === "/home" && location.pathname === "/home");

        return (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive: routeActive }) => {
              const active = routeActive || isActive;
              return `relative text-base font-medium transition-colors duration-200 ${
                active
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`;
            }}
          >
            {({ isActive: routeActive }) => {
              const active = routeActive || isActive;
              return (
                <>
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-[29px] left-0 right-0 h-[2px] bg-violet-600" />
                  )}
                </>
              );
            }}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
