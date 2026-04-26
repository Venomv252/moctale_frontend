import React from "react";
import "../../../App.css";
import { Link, NavLink } from "react-router-dom";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const navItems = [
  {
    label: "User",
    to: "/admin/users",
    icon: PersonOutlineRoundedIcon,
  },
  {
    label: "Content",
    to: "/admin/content",
    icon: ArticleOutlinedIcon,
  },
];

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-screen border-b border-white/10 bg-[rgba(3,3,3,0.88)] backdrop-blur-[18px]"
      style={{ height: "72px" }}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <div className="flex h-full items-center">
          <Link to="/" className="flex h-full items-center">
            <div className="h-[35px] w-[105px] flex-shrink-0 flex-grow-0 sm:h-[40px] sm:w-[120px]">
              <img
                alt="Moctale Logo"
                fetchPriority="high"
                width="118"
                height="30"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-contain select-none"
                src="https://www.moctale.in/Moctale-logo-HQ.svg"
                style={{
                  color: "transparent",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `group flex h-11 items-center overflow-hidden rounded-full border text-sm transition-all duration-300 ease-out ${
                    isActive
                      ? "w-[160px] justify-start gap-3 border-white/20 bg-[#740DF6] px-4 text-white shadow-[0_12px_35px_rgba(255,255,255,0.14)]"
                      : "w-11 justify-center border-white/12 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex shrink-0 items-center justify-center text-lg transition-transform duration-300 ${
                        isActive ? "translate-x-0" : "translate-x-[1px]"
                      }`}
                    >
                      <Icon fontSize="inherit" />
                    </span>
                    <span
                      className={`overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.32em] transition-all duration-300 ${
                        isActive
                          ? "max-w-24 translate-x-0 opacity-100"
                          : "max-w-0 translate-x-2 opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
