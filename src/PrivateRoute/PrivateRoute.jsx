import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (user?.email) {
    return children;
  }
  if (loader) {
    return (
      <div className="radial-progress text-center" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
