import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Profile from "../pages/Profile";
import History from "../pages/History";
import StartWorkout from "../pages/StartWorkout";
import Exercises from "../pages/Exercises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="profile" />,
      },
      {
        path: "profile",
        element: <Profile />,
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
