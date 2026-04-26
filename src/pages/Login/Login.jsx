import React from "react";
import Auth from "./componenets/Auth.jsx";
import LeftAnimation from "./componenets/LeftAnimation.jsx";

const Login = () => {
  return (
    <div className="w-full h-screen overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen overflow-hidden">
        <LeftAnimation />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 lg:ml-[50vw] h-screen">
        <Auth />
      </div>

    </div>
  );
};

export default Login;