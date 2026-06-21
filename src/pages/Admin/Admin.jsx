import { React, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"

import Sidebar from "./components/Sidebar.jsx";

const Admin = () => {
  const [IsOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <Sidebar IsOpen={IsOpen}  />
      <main
        className={`flex-1 transition-all duration-300
        ${IsOpen ? "ml-[250px]" : "ml-[80px]"}`}
      >
        <Outlet  context={{ IsOpen, setIsOpen }} />
      </main>
    </div>
  );
};

export default Admin;
