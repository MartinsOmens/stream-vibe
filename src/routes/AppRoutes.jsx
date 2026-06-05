import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Support from "../pages/Support";
import Subscriptions from "../pages/Subscriptions";
import MovieDetails from "../pages/MovieDetails";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import ProtectedRoute from "./ProtectedRoute";

// Dashboard pages
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyMovies from "../pages/dashboard/MyMovies";
import MySeries from "../pages/dashboard/MySeries";
import MyList from "../pages/dashboard/MyList";
import MyTrending from "../pages/dashboard/MyTrending";
import DashboardSettings from "../pages/dashboard/DashboardSettings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/support" element={<Support />} />
      <Route path="/subscriptions" element={<Subscriptions />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Default dashboard page */}
        <Route index element={<DashboardHome />} />

        {/* Nested routes (NO /dashboard prefix here) */}
        <Route path="/dashboard/my-movies" element={<MyMovies />} />
        <Route path="/dashboard/my-series" element={<MySeries />} />
        <Route path="/dashboard/my-list" element={<MyList />} />
        <Route path="/dashboard/trending" element={<MyTrending />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
