import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./componenets/Navbar.jsx";

const Admin = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-[1600px] px-4 pb-10 pt-28 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
