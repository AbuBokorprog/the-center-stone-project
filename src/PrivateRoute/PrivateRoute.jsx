import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  // console.log(user?.email);
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
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
