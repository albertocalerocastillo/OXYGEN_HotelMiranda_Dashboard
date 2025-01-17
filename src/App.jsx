import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/pages/Login";
import PrivateRoute from "./login/components/PrivateRoute";
import Dashboard from "./dashboard/pages/Dashboard";
import Bookings from "./bookings/pages/Bookings";
import Rooms from "./rooms/pages/Rooms";
import NewRoomForm from "./rooms/pages/NewRoomForm";
import Contact from "./contact/pages/Contact";
import Users from "./users/pages/Users";
import NewEmployeeForm from "./users/pages/NewEmployeeForm";
import Layout from "./components/Layout/Layout";

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
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/bookings" element={<PrivateRoute element={<Bookings />} />} />
          <Route path="/rooms" element={<PrivateRoute element={<Rooms />} />} />
          <Route path="/new-room" element={<PrivateRoute element={<NewRoomForm />} />} />
          <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
          <Route path="/users" element={<PrivateRoute element={<Users />} />} />
          <Route path="/new-employee" element={<PrivateRoute element={<NewEmployeeForm />} />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
