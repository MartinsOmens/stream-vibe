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
import DashboardMovies from "../pages/dashboard/DashboardMovies";
import DashboardSeries from "../pages/dashboard/DashboardSeries";
import DashboardMyList from "../pages/dashboard/DashboardMyList";
import DashboardTrending from "../pages/dashboard/DashboardTrending";
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
        <Route path="/dashboard/movies" element={<DashboardMovies />} />
        <Route path="/dashboard/series" element={<DashboardSeries />} />
        <Route path="/dashboard/my-list" element={<DashboardMyList />} />
        <Route path="/dashboard/trending" element={<DashboardTrending />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
