import React from "react";

const User = ({ user, index }) => {
  const { Name, email, image, id, Role } = user;
  return (
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>{index}</td>
        <td>
          <img className="w-20 h-10" src={image} alt="" />
        </td>
        <td>{Name}</td>
        <td>{email}</td>
        {{ Role } ? <td>{Role}</td> : <td>"client"</td>}
      </tr>
    </tbody>
  );
};

export default User;
