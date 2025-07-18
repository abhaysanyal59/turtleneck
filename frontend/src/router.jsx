import React from "react";
import LogsRoutes from "./Router/logsRoutes";
import { BrowserRouter } from "react-router-dom";
import DashRoutes from "./Router/dashboards";

const Router = () => {
  return (
    <BrowserRouter>
    <LogsRoutes></LogsRoutes>
    <DashRoutes></DashRoutes>
    </BrowserRouter>
  )
};

export default Router;
