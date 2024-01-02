import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import ErrorPage from "./Component/ErrorPage";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Layout/Dashboard";
import AllUsers from "./Component/Dashboard/Admin/AllUsers/AllUsers";
import AddJewelry from "./Component/Dashboard/Admin/AddJewelry";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import AllJewelry from "./pages/ALLJewelry/AllJewelry";
import Blogs from "./pages/Blogs/Blogs";
import BestProductDes from "./pages/Home/BestProductDes";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderHistory from "./Component/Dashboard/Customer/OrderHistory";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import Wishlist from "./Component/Dashboard/Customer/Wishlist";

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
        path: "/jewelry/:id",
        element: <BestProductDes />,
      },
      {
        path: "/allJewelry",
        element: (
          <PrivateRoute>
            <AllJewelry></AllJewelry>
          </PrivateRoute>
        ),
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
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
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
        element: (
          <AdminPrivateRoute>
            <AllUsers></AllUsers>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <UserPrivateRoute>
            <OrderHistory />
          </UserPrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <UserPrivateRoute>
            <Wishlist />
          </UserPrivateRoute>
        ),
      },
      {
        path: "addJewelry",
        element: (
          <AdminPrivateRoute>
            <AddJewelry></AddJewelry>
          </AdminPrivateRoute>
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
