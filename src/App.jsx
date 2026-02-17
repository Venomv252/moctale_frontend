import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
