import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import Layout from "./Layout.jsx";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin/Admin.jsx";
import AdminUsers from "./pages/Admin/AdminUsers.jsx";
import AdminContent from "./pages/Admin/AdminContent.jsx";

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
        {
          path: "/admin",
          element: <Admin />,
          children: [
            {
              index: true,
              element: <Navigate to="users" replace />,
            },
            {
              path: "users",
              element: <AdminUsers />,
            },
            {
              path: "content",
              element: <AdminContent />,
            },
          ],
        }
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
