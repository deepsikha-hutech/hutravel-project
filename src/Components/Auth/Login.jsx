// import React, { useState } from "react";
// import "./Login.css";
// import backgroundLogo from "../images/backgroundLogo.svg";
// import logo from "../images/logo.svg";
// import { Button, Form, Input, Row, Col } from "antd";

// const Login = () => {
//   const [form] = Form.useForm();

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const handleLogin = async (values) => {
//     // alert("value");
//     // e.preventDefault();
//     // console.log("Email:", email);
//     console.log(values);
//     // console.log("Password:", password);
//   };

//   return (
//     <div className="login-container">
//       <Row>
//         <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-left">
//           <img src={backgroundLogo} alt="Company Logo" />
//         </Col>

//         <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-right">
//           <Form className="login-form" form={form} onFinish={handleLogin}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 justifyContent: "center",
//                 alignContent: "center",
//               }}
//             >
//               <img
//                 src={logo}
//                 className="login-logo"
//                 alt="Logo"
//                 height={"37px"}
//                 width={"31px"}
//               />
//               <p className="login-p">Hutravel</p>
//             </div>

//             <div className="input-group">
//               <label>Email Address</label>
//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Enter email address"
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label>Password</label>
//               <Input
//                 name="password"
//                 type="password"
//                 placeholder="Enter password"
//                 // value={password}
//                 // onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <Button type="primary" htmlType="submit" className="login-button">
//               Login
//             </Button>

//             <p className="login-footer">Copyright © Hutech Solutions</p>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import backgroundLogo from "../images/backgroundLogo.svg";
import logo from "../images/logo.svg";
import { Button, Form, Input, Row, Col } from "antd";
import variable from "../../assets/variables";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      console.log(values);
      const response = await axios({
        method: "post",
        url: `${variable?.HUTRAVEL_API_URL}/api/v1/auth/login`,
        data: values,
      });

      const data = response?.data;
      if (data?.token) {
        Cookies.set("accessToken", data?.token, { expires: 7 });
        console.log("token");
        console.log("redirecting to /trip");
        navigate("/trip");
      } else {
        alert("Invalid credentials");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log("Form Values:", values);
  };

  return (
    <div className="login-container">
      <Row>
        <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-left">
          <img src={backgroundLogo} alt="Company Logo" />
        </Col>

        <Col xs={24} sm={18} md={12} lg={24} xl={24} className="login-right">
          <Form
            className="login-form"
            form={form}
            onFinish={handleLogin}
            layout="vertical"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
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

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{ padding: "6px" }}
                placeholder="Enter email address"
                name="email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { type: "password", message: "please enter your password!" },
              ]}
            >
              <Input.Password
                style={{ padding: "6px" }}
                placeholder="Enter password"
                name="password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Login
              </Button>
            </Form.Item>

            <p className="login-footer">Copyright © Hutech Solutions</p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
