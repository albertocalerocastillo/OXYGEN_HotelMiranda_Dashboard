import React, { useState } from "react";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";
import { LayoutContainer, MainContent, Content } from "./LayoutStyled";

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <LayoutContainer sidebarVisible={isSidebarVisible}>
      <SideBar isVisible={isSidebarVisible} />
      <MainContent sidebarVisible={isSidebarVisible}>
        <NavBar toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;