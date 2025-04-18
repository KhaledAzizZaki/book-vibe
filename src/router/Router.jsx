import { createBrowserRouter } from "react-router";

import Root from "../page/root/Root";
import ListedBooks from "../page/listedBooks/ListedBooks";
import Home from "../page/home/Home";
import PagesToRead from "../page/pagesToRead/PagesToRead";
import ErrorPage from "../page/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listed",
        Component: ListedBooks,
      },
      {
        path: "pagesToRead",
        Component: PagesToRead,
      },
    ],
  },
]);
