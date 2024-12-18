import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Error from "./Components/Error";
import "./index.css";
import MasterLayout from "./Components/Dashboard/MasterLayout";
import Dashboard from "./Components/Dashboard/Dashboard";

// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
