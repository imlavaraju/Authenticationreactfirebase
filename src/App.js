import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerlogin from "./components/registerlogin";
import HomeScreen from "./components/home";
import ForgotPassword from "./components/forgotpassword";
import "./App.css";

function PasswordLoginWithFirebase() {
  return (
    <BrowserRouter>
      <div className="bod">
        <Routes>
          <Route path="/" element={<Registerlogin />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default PasswordLoginWithFirebase;
