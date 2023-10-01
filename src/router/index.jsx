import { createBrowserRouter } from "react-router-dom";
import Notification from "~/pages/notification";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import NotFaund from "~/pages/not-faund";
import MainLayouts from "../layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: <Home /> },

      { path: "explore", element: <Explore /> },
      { path: "notification", element: <Notification /> },
      { path: "*", element: <NotFaund /> },
    ],
  },
]);

export default routes;
