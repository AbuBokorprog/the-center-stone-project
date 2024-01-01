import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Component/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const UserPrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
        console.log();
      });
  }, [user?.email]);

  if (users) {
    return children;
  }
  if (loader) {
    return <Spinner />;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default UserPrivateRoute;
