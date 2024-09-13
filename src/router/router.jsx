import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Profile from "../pages/Profile";
import History from "../pages/History";
import StartWorkout from "../pages/StartWorkout";
import Exercises from "../pages/Exercises";
import Register from "../components/profile/Register";
import Login from "../components/profile/Login";
import UserProfile from "../components/profile/UserProfile";
import ProtectedRoute from "../components/profile/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="start-workout" />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProtectedRoute />,
          },
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "user", element: <UserProfile /> },
        ],
      },

      {
        path: "history",
        element: <History />,
      },
      {
        path: "start-workout",
        element: <StartWorkout />,
      },
      {
        path: "exercises",
        element: <Exercises />,
      },
    ],
  },
]);

export default router;
