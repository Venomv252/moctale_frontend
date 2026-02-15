import react from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="bg-[rgba(8,8,8,0.8)] backdrop-blur-[16px] w-screen fixed top-0 left-0 z-50 border-b border-[#252833]"
        style={{ height: "64px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 h-full flex justify-between items-center">
          <div className="flex items-center h-full">
            <Link to="/" className="flex items-center h-full">
              <div className="w-[105px] h-[35px] sm:w-[120px] sm:h-[40px] flex-shrink-0 flex-grow-0">
                <img
                  alt="Moctale Logo"
                  fetchPriority="high"
                  width="118"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain select-none pointer-events-none"
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
          <div className="flex items-center">
            <Link to= "/ogin">
              <button
                className="inline-flex items-center px-4 py-2 
            bg-[#740DF6] hover:bg-[#5A0BC2] 
            font-medium text-sm text-white rounded-lg
            transition-colors duration-200 
            focus:outline-none focus:ring-2 focus:ring-[#740DF6] focus:ring-offset-2 focus:ring-offset-black"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
