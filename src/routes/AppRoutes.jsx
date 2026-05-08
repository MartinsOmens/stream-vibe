import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Support from "../pages/Support";
import Subscriptions from "../pages/Subscriptions";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
