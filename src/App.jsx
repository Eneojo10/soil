import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import Mainboard from "./Components/Main/Mainboard";
import SignUp from "./Components/Registration/SignUp";
import Login from "./Components/Login/Login";









function App() {
  return (
    <Routes>
      <Route path='/dashboardd' element={<Dashboard />} />
      <Route path="/dashbord" element={<Mainboard />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;