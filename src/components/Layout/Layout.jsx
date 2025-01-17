import React from "react";
import NavBar from "../NavBar/NavBar";
import { SideBar } from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { LayoutContainer, MainContent, Content } from "./LayoutStyled";

const Layout = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <LayoutContainer sidebarVisible={isSidebarVisible}>
      <SideBar isVisible={isSidebarVisible} />
      <MainContent sidebarVisible={isSidebarVisible}>
        <NavBar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;