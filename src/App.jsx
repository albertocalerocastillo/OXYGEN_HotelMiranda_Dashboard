import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Bookings from "./bookings/Bookings";
import Contact from "./contact/Contact";
import Users from "./users/Users";
import Layout from "./components/Layout";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              isSidebarVisible={isSidebarVisible}
              toggleSidebar={toggleSidebar}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;