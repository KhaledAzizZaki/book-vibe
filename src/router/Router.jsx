import { createBrowserRouter } from "react-router";

import Root from "../page/root/Root";
import ListedBooks from "../page/listedBooks/ListedBooks";
import Home from "../page/home/Home";
import PagesToRead from "../page/pagesToRead/PagesToRead";
import ErrorPage from "../page/errorPage/ErrorPage";
import BookDetails from "../page/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listed",
        Component: ListedBooks,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
