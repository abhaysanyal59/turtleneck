import React from "react";
import { Routes, Route } from "react-router-dom";
import Logs from "../Pages/logs";

const LogsRoutes = () => {
  return (
    <Routes>
      <Route path="/logs" element={<Logs></Logs>}></Route>
    </Routes>
  );
};

export default LogsRoutes;
