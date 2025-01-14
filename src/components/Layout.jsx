import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div style={{ paddingLeft: '70px' }}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;