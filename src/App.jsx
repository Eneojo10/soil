import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Mainboard from "./Components/Main/Mainboard";
import SignUp from "./Components/Registration/SignUp";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigations/Navigation";
import Hamburger from "./Components/Hamburger/Hamburger";
import Farmland from "./Components/farmland/Farmland";
import Farm from "./Components/farmland/Farm";
import Soiltest from "./Components/farmland/Soiltest";
import PrivateRoutes from "./Components/utils/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mainboard" element={<Mainboard />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/hamburger" element={<Hamburger />} />
        <Route path="/farmers" element={<Farmland />} />
        <Route path="/farms" element={<Farm />} />
        <Route path="/soiltest" element={<Soiltest />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
