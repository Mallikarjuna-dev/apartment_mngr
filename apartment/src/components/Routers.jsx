import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbar from "./Navbar";
import { Flat } from "./Flat";
import { Login } from "./Login";

export const Routers = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/flat"} element={<Flat />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
};
