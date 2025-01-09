import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Error from "./Components/Error";
import "./index.css";
import MasterLayout from "./Components/Dashboard/MasterLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
// import Trip from "./Components/Dashboard/Trip";
import Expenses from "./Components/Dashboard/Expenses";
import Reports from "./Components/Dashboard/Reports";
import Approval from "./Components/Dashboard/Approval";
import AllPendingTrip from "./Components/Dashboard/AllPendingTrip";

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
      {
        path: "trip",
        element: <AllPendingTrip />,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <Expenses />,
        errorElement: <Error />,
      },
      {
        path: "reports",
        element: <Reports />,
        errorElement: <Error />,
      },
      {
        path: "approvals",
        element: <Approval />,
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
