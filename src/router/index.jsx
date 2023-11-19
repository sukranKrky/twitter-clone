import { createBrowserRouter } from "react-router-dom";
import Notification from "~/pages/notification";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import NotFaund from "~/pages/not-faund";
import MainLayouts from "../layouts/main";
import Messagee from "../pages/message";
import Lists from "../pages/lists";
import Premium from "../pages/premium";
import Profile from "../pages/profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "/", element: <Home /> },

      { path: "explore", element: <Explore /> },
      { path: "notification", element: <Notification /> },
      { path: "message", element: <Messagee /> },
      { path: "list", element: <Lists /> },
      { path: "premium", element: <Premium /> },
      { path: "profile", element: <Profile /> },


      { path: "*", element: <NotFaund /> },
    ],
  },
]);

export default routes;
