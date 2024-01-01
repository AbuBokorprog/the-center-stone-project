import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import Spinner from "../Component/Spinner/Spinner";

const AdminPrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data[0]);
      });
  }, [user?.email]);
  const location = useLocation();
  if (admin) {
    return children;
  }
  if (loader) {
    return <p>...Loading</p>;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default AdminPrivateRoute;
