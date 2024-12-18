import React, { useState } from "react";
import "./Login.css";
import backgroundLogo from "../images/backgroundLogo.svg";
import logo from "../images/logo.svg";
import { Button, Form, Input, Row, Col } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <Row>
        <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-left">
          <img src={backgroundLogo} alt="Company Logo" />
        </Col>

        <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-right">
          <Form className="login-form" onSubmit={handleLogin}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={logo}
                className="login-logo"
                alt="Logo"
                height={"37px"}
                width={"31px"}
              />
              <p className="login-p">Hutravel</p>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>

            <p className="login-footer">Copyright © Hutech Solutions</p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
