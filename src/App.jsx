import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Layout from "./Layout.jsx";

import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/User/Home.jsx";

import Admin from "./pages/Admin/Admin.jsx";

import Dashboard from "./pages/Admin/Dashboard.jsx";
import Users from "./pages/Admin/Users.jsx";
import Content from "./pages/Admin/Content.jsx";
import Reviews from "./pages/Admin/Reviews.jsx";
import Analytics from "./pages/Admin/Analytics.jsx";
import Bookings from "./pages/Admin/Bookings.jsx";

import AdminProtectedRoute from "./routes/AdminProtectedRoute.jsx";
import UserProtectedRoute from "./routes/UserProtectedRoute.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },

        {
          path: "login",
          element: <Login />,
        },

        {
          path: "admin/login",
          element: <Login />,
        },

        {
          element: <UserProtectedRoute />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            // Future user routes can be added here:
            // { path: "profile", element: <Profile /> },
            // { path: "bookings", element: <UserBookings /> },
            // { path: "reviews", element: <UserReviews /> },
          ],
        },

        {
          element: <AdminProtectedRoute />,
          children: [
            {
              path: "admin",
              element: <Admin />,
              children: [
                {
                  index: true,
                  element: <Navigate to="dashboard" replace />,
                },

                {
                  path: "dashboard",
                  element: <Dashboard />,
                },

                {
                  path: "users",
                  element: <Users />,
                },

                {
                  path: "content",
                  element: <Content />,
                },

                {
                  path: "reviews",
                  element: <Reviews />,
                },

                {
                  path: "analytics",
                  element: <Analytics />,
                },

                {
                  path: "bookings",
                  element: <Bookings />,
                },
              ],
            },
          ],
        },
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
