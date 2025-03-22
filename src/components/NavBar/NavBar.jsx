import { TbArrowBigRightLinesFilled, TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Nav, NavItemContainer } from "./NavBarStyles";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ toggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/bookings":
        return "Bookings";
      case "/rooms":
        return "Rooms";
      case "/new-room":
        return "Rooms > Nueva habitación";
      case "/contact":
        return "Contact";
      case "/users":
        return "Users";
      case "/new-employee":
        return "Users > Nuevo user";
      default:
        if (location.pathname.startsWith("/edit-employee/")) {
          return "Users > Edit user";
        }
        if (location.pathname.startsWith("/bookings/")) {
          return "Bookings > Details";
        }
        return "Dashboard";
    }
  };

  return (
    <Nav>
      <NavItemContainer>
        {isSidebarVisible ? (
          <TbArrowBigLeftLinesFilled
            fontSize={"xx-large"}
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <TbArrowBigRightLinesFilled
            fontSize={"xx-large"}
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        )}
        <h2>{getPageTitle()}</h2>
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