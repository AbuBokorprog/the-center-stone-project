import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Jewelry from "./Jewelry";

const MyJewelry = () => {
  const { user } = useContext(authContext);
  //console.log(user?.email);
  const email = user?.email;
  const [jewelry, setJewelry] = useState([]);
  useEffect(() => {
    fetch(
      `https://the-center-stone-server-6fcim3n2o-abubokorprog.vercel.app/jewelry`
    )
      .then((res) => res.json())
      .then((data) => {
        setJewelry(data);
      });
  }, []);

  const myJewelry = jewelry.filter((j) => j.Email === email);
  // console.log(myJewelry);
  return (
    <div className="mb-10 lg:mb-20">
      <div className="mb-10 lg:mb-20">
        <img
          className="w-screen max-h-screen"
          src="/Image/Banner/banner2ring.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center text-5xl font-semibold">
          My Jewelry {myJewelry.length}
        </h2>
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 row-auto gap-4">
        {myJewelry.map((mj) => (
          <Jewelry key={mj._id} Jewelry={mj}></Jewelry>
        ))}
      </div>
    </div>
  );
};

export default MyJewelry;
