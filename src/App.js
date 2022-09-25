import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import RegisterPage from "./components/login/RegisterPage";
import NotFoundPage from "./components/NotFoundPage";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<RegisterPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
