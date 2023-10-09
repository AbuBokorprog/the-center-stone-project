import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loader } = useContext(authContext);
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
