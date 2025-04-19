import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Books = ({ data }) => {
  // console.log(data);
  const {
    bookName,
    author,
    image,
    yearOfPublishing,
    category,
    rating,
    tags,
    bookId,
  } = data;
  return (
    <Link className="mx-auto" to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm justify-center items-center border-1 border-gray-200 rounded-2xl pt-6">
        <figure className="w-80 h-58 bg-gray-100">
          <img src={image} alt="Shoes" className="w-30" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <button key={index} className="text-lime-500">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary bg-lime-500 border-0">
              {yearOfPublishing}
            </div>
          </h2>
          <p>By: {author}</p>
          <div className="border-b border-dashed border-gray-400"></div>
          <div className="card-actions justify-between">
            <div className="badge ">{category}</div>
            <div className="badge ">
              <FaStarHalfAlt />
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
