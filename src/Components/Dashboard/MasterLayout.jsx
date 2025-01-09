import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import AppHeader from "../common/AppHeader";

function MasterLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E9E6E6",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Sidebar />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            // padding: "16px",
            // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AppHeader />
        </div>

        <div
          style={{
            flex: 1,
            padding: "16px",
            marginTop: "16px",
            marginLeft: "30px",
            marginRight: "16px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MasterLayout;
