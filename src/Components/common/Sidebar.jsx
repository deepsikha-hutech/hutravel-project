import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import logo from "../images/logo.svg";
import { Button, Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

function Sidebar() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const location = useLocation();
  const currentKey =
    {
      "/dashboard": "1",
    }[location.pathname] || "1";

  return (
    <Layout
      style={{
        // display: "flex",
        // flexDirection: "row",
        // flex: 0,
        height: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth={0}
        // collapsedWidth={collapsed ? 0 : 80}
        width={200}
        style={{
          backgroundColor: "#FFFFFF",
          // transition: "left 0.3s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "none",
          //   display: "flex",
          // flexDirection: "row",
          // height: "100%",
        }}
      >
        <div className="sidebar-panel" style={{ height: "100%" }}>
          <div
            className="sidebar-panel-img"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              margin: "30px",
              // height: "100%",
              // width: "100%",
              //   justifyContent: "center",
            }}
          >
            <img src={logo} alt="Company Logo" style={{ width: "15%" }} />
            {!collapsed && (
              <h2 style={{ margin: "10px 0" }}> &nbsp; Hutravel</h2>
            )}
          </div>
          <Menu
            selectedKeys={{ currentKey }}
            mode="inline"
            style={{ borderRight: "none" }}
          >
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              <Link to="/trip">Trips</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DollarOutlined />}>
              <Link to="/expenses">Expenses</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <Link to="/reports">Reports</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CheckCircleOutlined />}>
              <Link to="/approvals">Approvals</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Button
          onClick={toggleSidebar}
          className="toggle-btn"
          style={{
            position: "fixed",
            top: 20,
            left: collapsed ? 20 : 150,
            zIndex: 10,
            transition: "left 0.3s ease",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
