import React from "react";

const User = (props) => {
  const { Name, email, image, id } = props.user;
  return (
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <td>
          <img className="w-20" src={image} alt="" />
        </td>
        <td>{Name}</td>
        <td>{email}</td>
        <td>Admin</td>
      </tr>
    </tbody>
  );
};

export default User;
