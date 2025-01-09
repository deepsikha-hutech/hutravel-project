import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const handleLogout = () => {
  navigate("/login");
};

const AppHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Item key="3" onClick={handleLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "bold" }}></div>
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <span style={{ marginLeft: "8px" }}>Samir Kumar</span>
        </div>
      </Dropdown>

      {/* <Dropdown placement="bottomRight" trigger={["click"]}>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <span style={{ marginLeft: "8px" }}>Samir Kumar</span>
        </div>
      </Dropdown> */}
    </Header>
  );
};

export default AppHeader;
