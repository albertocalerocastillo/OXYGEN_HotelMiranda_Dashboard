import { HiMenuAlt2 } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Nav, NavItemContainer } from "./NavBarStyles";
import { useNavigate } from "react-router-dom";

const NavBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
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
  );
};

export default NavBar;