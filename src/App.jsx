import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Bookings from "./bookings/Bookings";
import Contact from "./contact/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;