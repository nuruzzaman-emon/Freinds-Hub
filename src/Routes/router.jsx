import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../Pages/Home/HomePage";
import Photos from "../Pages/Photos/Photos";
import Notifications from "../Pages/Notifications/Notifications";
import Messages from "../Pages/Messages/Messages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/home",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "messages",
        Component: Messages,
      },
      {
        path: "photos",
        Component: Photos,
      },
      {
        path: "notifications",
        Component: Notifications,
      },
    ],
  },
]);
