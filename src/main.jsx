import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ScreenLogin from "./components/pages/ScreenLogin.jsx";
import ScreenRegister from "./components/pages/ScreenRegister.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
