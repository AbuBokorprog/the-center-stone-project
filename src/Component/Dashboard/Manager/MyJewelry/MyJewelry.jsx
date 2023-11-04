import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../Provider/AuthProvider";
import Jewelry from "./Jewelry";

const MyJewelry = () => {
  const { user } = useContext(authContext);

  const [jewelry, setJewelry] = useState([]);
  useEffect(() => {
    fetch(
      `https://center-stone-server-side.vercel.app/jewelry/${user?.displayName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJewelry(data);
      });
  }, []);

  return (
    <div className="h-full">
      <div>
        <h2 className="text-center text-5xl font-semibold">My Jewelry</h2>
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 row-auto gap-4">
        {jewelry.map((mj) => (
          <Jewelry key={mj._id} Jewelry={mj}></Jewelry>
        ))}
      </div>
    </div>
  );
};

export default MyJewelry;
