import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { FaHome, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [oneUsers, setUsers] = useState([]);
  const { user, logout } = useContext(authContext);

  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [user]);
  console.log(oneUsers[0]?.Role);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-auto flex flex-col items-center justify-center">
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
            {oneUsers[0]?.Role === "admin" ? (
              <>
                <li>
                  <Link to="allUsers">
                    <FaUsers />
                    ALL Users
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
                  <Link to="myJewelry">My Jewelry</Link>
                </li>
                <li>
                  <Link to="addJewelry">Add Jewelry</Link>
                </li>
              </>
            ) : (
              <>
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
