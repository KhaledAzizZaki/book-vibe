import { createBrowserRouter } from "react-router";
import Home from "../component/Home";
import Root from "../page/root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
