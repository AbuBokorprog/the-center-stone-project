import React, { useContext, useEffect, useState } from "react";
import AuthProvider, { authContext } from "../Provider/AuthProvider";
import { FaHome, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { user, logout } = useContext(authContext);
  // console.log(user, users);

  useEffect(() => {
    fetch(
      "https://the-center-stone-server-6fcim3n2o-abubokorprog.vercel.app/users"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const oneUser = users.find((u) => u.email == user?.email);
  // console.log(oneUser);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-auto w-full h-100 flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary my-auto mx-auto drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu   p-4 w-80 h-full text-xl font-medium  ">
            <div>
              <h2 className="text-3xl font-semibold text-center my-2">
                The Center Stone
              </h2>
            </div>
            {oneUser?.Role ? (
              <>
                <li className="">
                  <Link>
                    <FaHome></FaHome>Owner Home
                  </Link>
                </li>
                <li>
                  <Link className="" to="manageClasses">
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    Manage Product
                  </Link>
                </li>
                <li>
                  <Link to="allUsers">
                    <FaUsers />
                    ALL Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link>Client Home</Link>
                </li>
                <li>
                  <Link to="mySelectedProduct">
                    <span>
                      <img src="" alt="" className="w-10" />
                    </span>
                    My Selected Product
                  </Link>
                </li>
                <li>
                  <Link to="paymentHistory">
                    <span>
                      <img src="" alt="" className="w-10" />
                    </span>
                    Payment History
                  </Link>
                </li>
              </>
            )}
            {/* default section */}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
