import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useContext(authContext);
  if (!user?.email) {
    <Navigate to="/"></Navigate>;
  }
  return <div></div>;
};

export default PrivateRoute;
