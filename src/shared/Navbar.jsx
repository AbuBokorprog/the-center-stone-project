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
              <Link to="/" className="ps-5">
                Home
              </Link>
            </li>
            <li>
              <Link className="ps-5" to="allJewelry">
                All Jewelry
              </Link>
            </li>
            <li>
              <Link className="ps-5" to="myJewelry">
                My Jewelry
              </Link>
            </li>
            <li>
              <Link className="ps-5" to="addJewelry">
                Add Jewelry
              </Link>
            </li>
            <li>
              <Link className="ps-5" to="blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-bold">
          <Link to="login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
