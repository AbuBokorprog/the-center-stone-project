import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="allJewelry">All Jewelry</Link>
              </li>
              <li>
                <Link to="myJewelry">My Jewelry</Link>
              </li>
              <li>
                <Link to="addJewelry">Add Jewelry</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          <img className="w-32" src="/src/assets/Image/logo (2).png" alt="" />
          <Link to="/" className="normal-case text-xl">
            The Center Stone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="allJewelry">All Jewelry</Link>
            </li>
            <li>
              <Link>My Jewelry</Link>
            </li>
            <li>
              <Link>Add Jewelry</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
