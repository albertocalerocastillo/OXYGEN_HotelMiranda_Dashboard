import React from "react";
import { Link } from 'react-router-dom';
import {
  SideBarStyled, SideBarHeaderStyled, SideBarTitleStyled, SidebarItemStyled,
  SideBarProfileStyled, SideBarProfilePhotoStyled, SideBarProfileNameStyled,
  SideBarProfileEmailStyled, SideBarProfileButtonStyled, SideBarCopyrightStyled,
  SideBarCopyrightTitleStyled, SideBarCopyrightTextStyled
} from "./SideBarStyled";
import logo from '../assets/logo.png';
import photo from '../assets/perfil.jpg';
import {
  LuLayoutDashboard as DashboardIcon, LuCalendarCheck as BookingIcon,
  LuKeyRound as RoomsIcon, LuContact as ContactIcon, LuUsers as UsersIcon
} from "react-icons/lu";

export const SideBar = ({ isVisible }) => {
  return (
    <SideBarStyled isVisible={isVisible}>
      <SideBarHeaderStyled>
        <img src={logo} alt="Logo Icon" />
        <SideBarTitleStyled>
          <h2>travl</h2>
          <p>Hotel Admin Dashboard</p>
        </SideBarTitleStyled>
      </SideBarHeaderStyled>

      <Link to="/dashboard">
        <SidebarItemStyled><DashboardIcon /><p>Dashboard</p></SidebarItemStyled>
      </Link>
      <Link to="/bookings">
        <SidebarItemStyled><BookingIcon /><p>Bookings</p></SidebarItemStyled>
      </Link>
      <Link to="/rooms">
        <SidebarItemStyled><RoomsIcon /><p>Rooms</p></SidebarItemStyled>
      </Link>
      <Link to="/contact">
        <SidebarItemStyled><ContactIcon /><p>Contact</p></SidebarItemStyled>
      </Link>
      <Link to="/users">
        <SidebarItemStyled><UsersIcon /><p>Users</p></SidebarItemStyled>
      </Link>

      <SideBarProfileStyled>
        <SideBarProfilePhotoStyled><img src={photo} alt="Profile" /></SideBarProfilePhotoStyled>
        <SideBarProfileNameStyled>Alberto Calero</SideBarProfileNameStyled>
        <SideBarProfileEmailStyled>albertocctrabajo@gmail.com</SideBarProfileEmailStyled>
        <SideBarProfileButtonStyled>Editar</SideBarProfileButtonStyled>
      </SideBarProfileStyled>

      <SideBarCopyrightStyled>
        <SideBarCopyrightTitleStyled>Travl Hotel Admin Dashboard</SideBarCopyrightTitleStyled>
        <SideBarCopyrightTextStyled>© 2025 All Rights Reserved</SideBarCopyrightTextStyled>
        <SideBarCopyrightTextStyled>Made with ♥ by Alber987</SideBarCopyrightTextStyled>
      </SideBarCopyrightStyled>
    </SideBarStyled>
  );
};