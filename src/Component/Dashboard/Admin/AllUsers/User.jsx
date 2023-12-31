import React from "react";

const User = ({ user, index }) => {
  const { displayName, email, photoURL, Role } = user;
  return (
    <tbody>
      <tr className="bg-base-200">
        <td>{index}</td>
        <td>
          <img className="w-32 h-20" src={photoURL} alt="" />
        </td>
        <td>{displayName}</td>
        <td>{email}</td>
        <td>{Role}</td>
      </tr>
    </tbody>
  );
};

export default User;
