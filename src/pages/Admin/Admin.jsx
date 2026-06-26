import { React, useState } from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../../components/Admin/Shared/AdminNavbar.jsx";

import AdminSidebar from "../../components/Admin/Shared/AdminSidebar.jsx";

const Admin = () => {
  const [IsOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <AdminNavbar IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <AdminSidebar IsOpen={IsOpen}  />
      <main
        className={`flex-1 transition-all duration-300 pt-[72px]
        ${IsOpen ? "ml-[250px]" : "ml-[80px]"}`}
      >
        <Outlet  context={{ IsOpen, setIsOpen }} />
      </main>
    </div>
  );
};

export default Admin;
