import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/dashboard";

const DashRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
  );
};

export default DashRoutes;
