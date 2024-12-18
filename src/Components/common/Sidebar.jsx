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
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth={collapsed ? 0 : 80}
        width={220}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          border: "none",
        }}
      >
        <div className="sidebar-panel">
          <div className="sidebar-panel-img" style={{ textAlign: "center" }}>
            <img src={logo} alt="Company Logo" style={{ width: "10%" }} />
            {!collapsed && <h5 style={{ margin: "10px 0" }}>Hutravel</h5>}
          </div>
          <Menu
            selectedKeys={{ currentKey }}
            mode="inline"
            style={{ borderRight: "none" }}
          >
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<CalendarOutlined />}>
              <Link to="/dashboard">Trips</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<DollarOutlined />}>
              <Link to="/dashboard">Expenses</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<BarChartOutlined />}>
              <Link to="/dashboard">Reports</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<CheckCircleOutlined />}>
              <Link to="/dashboard">Approvals</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Button
        onClick={toggleSidebar}
        className="toggle-btn"
        style={{
          position: "fixed",
          top: 20,
          left: collapsed ? 20 : 200,
          zIndex: 1,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </Layout>
  );
}

export default Sidebar;
