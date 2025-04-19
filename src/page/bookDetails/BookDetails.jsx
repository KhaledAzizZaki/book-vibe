import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const handleMarkAsRead = (id) => {
  addToStoredDB(id);
};

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, author, image } = singleBook;
  return (
    <div>
      <h1>{bookName} </h1>
      <p>{author}</p>
      <img src={image} alt="" className="w-2xs" />

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn bg-lime-500 text-white"
      >
        Mark as Read
      </button>
      <button className="btn bg-cyan-400 text-white">Add to wish List</button>
    </div>
  );
};

export default BookDetails;
