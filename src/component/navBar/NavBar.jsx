import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const link = (
    <>
      <li className="pr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn border-lime-500 text-lime-500 hover:text-white hover:bg-lime-500"
              : "py-2 px-4"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="pr-4">
        <NavLink
          to="/listed"
          className={({ isActive }) =>
            isActive
              ? "btn border-lime-500 text-lime-500 hover:text-white hover:bg-lime-500"
              : "py-2 px-4"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            isActive
              ? "btn border-lime-500 text-lime-500 hover:text-white hover:bg-lime-500"
              : "py-2 px-4"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  mx-auto px-0 w-10/12">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BooK Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{link}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-lime-500 text-white">Sign In</a>
        <a className="btn bg-cyan-400 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
