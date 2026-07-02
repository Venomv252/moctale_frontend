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

// User Pages
import Schedule from "./pages/User/Schedule.jsx";
import Spaces from "./pages/User/Spaces.jsx";
import Collections from "./pages/User/Collections.jsx";
import Profile from "./pages/User/Profile.jsx";
import MyReviews from "./pages/User/MyReviews.jsx";
import UserBookings from "./pages/User/Bookings.jsx";
import Watchlist from "./pages/User/Watchlist.jsx";
import Settings from "./pages/User/Settings.jsx";
import Notifications from "./pages/User/Notifications.jsx";

// Genre Explorer Pages
import FollowingActivity from "./pages/User/FollowingActivity.jsx";
import MonthlyRanking from "./pages/User/MonthlyRanking.jsx";
import Top100 from "./pages/User/Top100.jsx";
import Category from "./pages/User/Category.jsx";
import Genre from "./pages/User/Genre.jsx";
import Country from "./pages/User/Country.jsx";
import Language from "./pages/User/Language.jsx";
import FamilyFriendly from "./pages/User/FamilyFriendly.jsx";
import AwardWinners from "./pages/User/AwardWinners.jsx";
import MoctaleSelect from "./pages/User/MoctaleSelect.jsx";
import Anime from "./pages/User/Anime.jsx";
import Franchise from "./pages/User/Franchise.jsx";

import Admin from "./pages/Admin/Admin.jsx";

import Dashboard from "./pages/Admin/Dashboard.jsx";
import Users from "./pages/Admin/Users.jsx";
import Content from "./pages/Admin/Content.jsx";
import Reviews from "./pages/Admin/Reviews.jsx";
import Analytics from "./pages/Admin/Analytics.jsx";
import Bookings from "./pages/Admin/Bookings.jsx";
import AdminSettings from "./pages/Admin/Settings.jsx";

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
              path: "explore",
              element: <Home />,
            },
            {
              path: "schedule",
              element: <Schedule />,
            },
            {
              path: "spaces",
              element: <Spaces />,
            },
            {
              path: "collections",
              element: <Collections />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "my-reviews",
              element: <MyReviews />,
            },
            {
              path: "bookings",
              element: <UserBookings />,
            },
            {
              path: "watchlist",
              element: <Watchlist />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
            // Genre Explorer Pages
            {
              path: "following",
              element: <FollowingActivity />,
            },
            {
              path: "monthly-ranking",
              element: <MonthlyRanking />,
            },
            {
              path: "top-100",
              element: <Top100 />,
            },
            {
              path: "category",
              element: <Category />,
            },
            {
              path: "genres",
              element: <Genre />,
            },
            {
              path: "country",
              element: <Country />,
            },
            {
              path: "language",
              element: <Language />,
            },
            {
              path: "family-friendly",
              element: <FamilyFriendly />,
            },
            {
              path: "award-winners",
              element: <AwardWinners />,
            },
            {
              path: "moctale-select",
              element: <MoctaleSelect />,
            },
            {
              path: "anime",
              element: <Anime />,
            },
            {
              path: "franchise",
              element: <Franchise />,
            },
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
                {
                  path: "settings",
                  element: <AdminSettings />,
                }
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
