import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Mainboard from "./Components/Main/Mainboard";
import SignUp from "./Components/Registration/SignUp";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mainboard" element={<Mainboard />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>
  );
}

export default App;
