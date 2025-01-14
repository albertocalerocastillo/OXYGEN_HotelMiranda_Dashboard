import React, { useState } from "react";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar dinámico */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenedor principal */}
      <div
        style={{
          flexGrow: 1,
          marginLeft: isSidebarOpen ? "240px" : "70px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <NavBar />
        <div style={{ marginTop: "70px", padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
