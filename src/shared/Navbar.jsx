import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { authContext } from "../Provider/AuthProvider";
import RightSideModal from "../Component/RightSideModal/RightSideModal";
import Wishlist from "../Component/RightSideModal/Wishlist";
import Cart from "../Component/RightSideModal/Cart";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const logoutHandler = () => {
    logout()
      .then(() => {})
      .then((error) => {});
  };
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
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="allJewelry">
                  All Jewelry
                </Link>
              </li>
              {user?.email ? (
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link className="" to="blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="" to="about">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="font-bold lg:visible text-sm lg:text-xl">
            <img className="w-20 lg:w-32" src="/Image/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="allJewelry">
                All Jewelry
              </Link>
            </li>
            {user?.email ? (
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link className="" to="blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="" to="about">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-bold">
          <div>
            <RightSideModal
              component={<Cart />}
              title={
                <MdOutlineShoppingBag className="w-full"></MdOutlineShoppingBag>
              }
            />
          </div>
          <div>
            <RightSideModal
              component={<Wishlist />}
              title={<FaRegHeart className="w-full"></FaRegHeart>}
            />
          </div>

          {user?.email ? (
            <div className="flex justify-center items-center gap-3">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div>
                <button
                  onClick={logoutHandler}
                  className="btn btn-warning bg-yellow-500 "
                >
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <Link to="login" className="btn btn-warning bg-yellow-400 ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
