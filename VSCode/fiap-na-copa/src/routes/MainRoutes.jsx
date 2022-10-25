import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import FigurinhaInter from "../components/FigurinhaInter";
import FigurinhaNacio from "../components/FigurinhaNacio";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/figuInter" element={<FigurinhaInter />} />
        <Route path="/figuNacio" element={<FigurinhaNacio />} />
      </Routes>
    </>
  );
}