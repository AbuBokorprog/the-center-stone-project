import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import ErrorPage from "./Component/ErrorPage";
import Home from "./Component/Home/Home";
import AllJewelry from "./Component/ALLJewelry/AllJewelry";
import AddJewelry from "./Component/AddJewelry";
import Blogs from "./Component/Blogs/Blogs";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import AuthProvider from "./Provider/AuthProvider";
import MyJewelry from "./Component/MyJewelry/MyJewelry";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import AllUsers from "./Component/Dashboard/AllUsers/AllUsers";
import ManageProduct from "./Component/Dashboard/ManageProduct/ManageProduct";
import Selectedproduct from "./Component/Dashboard/SelectedProduct/Selectedproduct";

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
        path: "/myJewelry",
        element: (
          <PrivateRoute>
            <MyJewelry></MyJewelry>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJewelry",
        element: (
          <PrivateRoute>
            <AddJewelry></AddJewelry>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
    element: <Dashboard></Dashboard>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto px-20">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
