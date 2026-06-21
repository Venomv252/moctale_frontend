import { React } from "react";
import "../../../App.css";
import { Link, NavLink } from "react-router-dom";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ IsOpen, setIsOpen }) => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-screen border-b border-white/10 bg-[rgba(3,3,3,0.88)] backdrop-blur-[18px]"
      style={{ height: "72px" }}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <div className="flex h-full items-center gap-5">
          <button onClick={() => setIsOpen(!IsOpen)}>
            {IsOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link to="/admin" className="flex h-full items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
