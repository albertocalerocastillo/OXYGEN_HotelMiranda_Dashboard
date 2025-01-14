import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Nav, NavItemContainer } from "./NavBarStyles";
import { useNavigate } from "react-router-dom";
import { SideBar } from "./SideBar";

const NavBar = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Navbar */}
      <Nav>
        <NavItemContainer>
          <HiMenuAlt2 fontSize={"xx-large"} onClick={toggleSidebar} />
          <h2>Dashboard</h2>
        </NavItemContainer>
        <NavItemContainer>
          <IoMailOutline fontSize={"xx-large"} color={"#135846"} />
          <BiBell fontSize={"xx-large"} color={"#135846"} />
          <TbLogout fontSize={"xx-large"} color={"#135846"} onClick={handleLogout} />
        </NavItemContainer>
      </Nav>

      {/* Sidebar Visibility Control */}
      <SideBar isVisible={isSidebarVisible} />
    </div>
  );
};

export default NavBar;
