import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ScreenLogin from "./components/pages/ScreenLogin.jsx";
import ScreenRegister from "./components/pages/ScreenRegister.jsx";
import ScreenForgotPassword from "./components/pages/ScreenForgotPassword.jsx";
import ScreenDashboard from "./components/pages/ScreenDashboard.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <ScreenLogin />,
  },
  {
    path: "/registro",
    element: <ScreenRegister />,
  },
  {
    path: "/esqueci-a-senha",
    element: <ScreenForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <ScreenDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
