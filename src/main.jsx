import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import ErrorPage from "./Component/ErrorPage";
import Home from "./Component/Home/Home";
import AllJewelry from "./Component/ALLJewelry/AllJewelry";
import Blogs from "./Component/Blogs/Blogs";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import AllUsers from "./Component/Dashboard/Admin/AllUsers/AllUsers";
import ManageProduct from "./Component/Dashboard/Admin/ManageProduct/ManageProduct";
import Selectedproduct from "./Component/Dashboard/Customer/SelectedProduct/Selectedproduct";
import MyJewelry from "./Component/Dashboard/Manager/MyJewelry/MyJewelry";
import AddJewelry from "./Component/Dashboard/Manager/AddJewelry";
import About from "./Component/About/About";
import Cart from "./Component/Cart/Cart";
import Wishlist from "./Component/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJewelry",
        element: <AllJewelry></AllJewelry>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "mySelectedProduct",
        element: <Selectedproduct></Selectedproduct>,
      },
      {
        path: "myJewelry",
        element: (
          <PrivateRoute>
            <MyJewelry></MyJewelry>
          </PrivateRoute>
        ),
      },
      {
        path: "addJewelry",
        element: (
          <PrivateRoute>
            <AddJewelry></AddJewelry>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto md:px-10 lg:px-20">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
