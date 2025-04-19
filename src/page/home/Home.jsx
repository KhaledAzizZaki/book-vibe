import React from "react";
import Hero from "../../component/hero/Hero";
import { useLoaderData } from "react-router";
import Books from "../../component/books/Books";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Hero></Hero>
      <h4 className="font-bold text-4xl text-center pb-9 ">Books</h4>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-5 pb-32 px-5">
        {data.map((book) => (
          <Books key={book.bookId} data={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;
