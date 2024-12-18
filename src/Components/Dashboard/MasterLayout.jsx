import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

function MasterLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundSize: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MasterLayout;
