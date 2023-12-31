import React, { useEffect, useState } from "react";
import User from "./User";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch("https://center-stone-server-side.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
      });
  }, []);

  return (
    <div className="h-full w-full">
      <div>
        <h2 className="text-3xl text-center font-semibold">All Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {allUser.map((u, index) => (
            <User key={u._id} user={u} index={index + 1}></User>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
