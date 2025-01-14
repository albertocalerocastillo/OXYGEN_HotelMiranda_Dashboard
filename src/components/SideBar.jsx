import React from "react";
import {
  SideBarStyled, SideBarHeaderStyled, SideBarTitleStyled, SidebarItemStyled,
  SideBarProfileStyled, SideBarProfilePhotoStyled, SideBarProfileNameStyled,
  SideBarProfileEmailStyled, SideBarProfileButtonStyled, SideBarCopyrightStyled,
  SideBarCopyrightTitleStyled, SideBarCopyrightTextStyled
} from "./SideBarStyled";
import hotelIcon from '../assets/perfil.jpg';
import photo from '../assets/perfil.jpg';
import {
  LuLayoutDashboard as DashboardIcon, LuCalendarCheck as BookingIcon,
  LuKeyRound as RoomsIcon, LuContact as ContactIcon, LuUsers as UsersIcon
} from "react-icons/lu";

export const SideBar = ({ isVisible }) => {
  return (
    <SideBarStyled isVisible={isVisible}>
      <SideBarHeaderStyled>
        <img src={hotelIcon} alt="Hotel Icon" />
        <SideBarTitleStyled>
          <h2>travl</h2>
          <p>Hotel Admin Dashboard</p>
        </SideBarTitleStyled>
      </SideBarHeaderStyled>

      {/* Sidebar Menu Items */}
      <SidebarItemStyled><DashboardIcon /><p>Dashboard</p></SidebarItemStyled>
      <SidebarItemStyled><BookingIcon /><p>Booking</p></SidebarItemStyled>
      <SidebarItemStyled><RoomsIcon /><p>Rooms</p></SidebarItemStyled>
      <SidebarItemStyled><ContactIcon /><p>Contact</p></SidebarItemStyled>
      <SidebarItemStyled><UsersIcon /><p>Users</p></SidebarItemStyled>

      {/* Profile Section */}
      <SideBarProfileStyled>
        <SideBarProfilePhotoStyled><img src={photo} alt="Profile" /></SideBarProfilePhotoStyled>
        <SideBarProfileNameStyled>Alberto Calero</SideBarProfileNameStyled>
        <SideBarProfileEmailStyled>albertocctrabajo@gmail.com</SideBarProfileEmailStyled>
        <SideBarProfileButtonStyled>Editar</SideBarProfileButtonStyled>
      </SideBarProfileStyled>

      {/* Footer */}
      <SideBarCopyrightStyled>
        <SideBarCopyrightTitleStyled>Travl Hotel Admin Dashboard</SideBarCopyrightTitleStyled>
        <SideBarCopyrightTextStyled>© 2025 All Rights Reserved</SideBarCopyrightTextStyled>
        <SideBarCopyrightTextStyled>Made with ♥ by Alber987</SideBarCopyrightTextStyled>
      </SideBarCopyrightStyled>
    </SideBarStyled>
  );
};
