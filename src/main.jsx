import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import ErrorPage from "./Component/ErrorPage";
import Home from "./Component/Home/Home";
import AllJewelry from "./Component/AllJewelry";
import MyJewelry from "./Component/MyJewelry";
import AddJewelry from "./Component/AddJewelry";
import Blogs from "./Component/Blogs";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import AuthProvider from "./Provider/AuthProvider";

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
        element: <MyJewelry></MyJewelry>,
      },
      {
        path: "/addJewelry",
        element: <AddJewelry></AddJewelry>,
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
