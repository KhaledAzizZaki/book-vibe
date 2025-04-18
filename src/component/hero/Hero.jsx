import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero bg-gray-100 mt-10 mb-24 w-10/12 mx-auto rounded-3xl py-36">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src="books.jpg" className="max-h-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-7xl font-bold max-w-[526px] pb-12">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn  bg-lime-500 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
