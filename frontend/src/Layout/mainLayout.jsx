import React from "react";
import SideBar from "../Components/sidebar";
import Topbar from "../Components/topBar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <aside className="sidebar">
        <SideBar />
      </aside>
      <div className="main-content">
        <Topbar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
