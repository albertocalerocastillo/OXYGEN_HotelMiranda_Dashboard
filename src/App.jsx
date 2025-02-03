import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import PrivateRoute from "./login/components/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Login from "./login/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";
import Bookings from "./bookings/pages/Bookings";
import Rooms from "./rooms/pages/Rooms";
import NewRoomForm from "./rooms/pages/NewRoomForm";
import Contact from "./contact/pages/Contact";
import Users from "./users/pages/Users";
import NewEmployeeForm from "./users/pages/NewEmployeeForm";
import BookingsDetails from "./bookings/pages/BookingsDetails";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <Layout
                  isSidebarVisible={isSidebarVisible}
                  toggleSidebar={toggleSidebar}
                />
              }
            >
              <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
              <Route path='/bookings' element={<PrivateRoute element={<Bookings />} />} />
              <Route path='/bookings/:bookingId' element={<PrivateRoute element={<BookingsDetails />} />} />
              <Route path='/rooms' element={<PrivateRoute element={<Rooms />} />} />
              <Route path='/new-room' element={<PrivateRoute element={<NewRoomForm />} />} />
              <Route path='/contact' element={<PrivateRoute element={<Contact />} />} />
              <Route path='/users' element={<PrivateRoute element={<Users />} />} />
              <Route path='/new-employee' element={<PrivateRoute element={<NewEmployeeForm />} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;