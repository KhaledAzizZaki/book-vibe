import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import Book from "../../component/books/Book";
import Books from "../../component/books/Books";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  console.log(readList);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className=" bg-gray-100 text-center rounded-2xl my-8 font-bold text-3xl py-8">
        Books
      </h1>
      <div className="text-center p-10">
        <div className="dropdown text-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-lime-500 text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2>This is Read Books {readList.length}</h2>
            {readList.map((data) => (
              <Books key={data.bookId} data={data}></Books>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>This is Wishlist Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
