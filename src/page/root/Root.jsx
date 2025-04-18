import React from "react";
import NavBar from "../../component/navBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../component/footer/Footer";

const Root = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-gray-200 min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
