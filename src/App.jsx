import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;