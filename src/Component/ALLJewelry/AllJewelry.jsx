import React, { useEffect, useState } from "react";
import Jewelry from "./Jewelry";

const AllJewelry = () => {
  const [jewelries, setJewelries] = useState([]);
  useEffect(() => {
    fetch(
      "https://the-center-stone-server-6fcim3n2o-abubokorprog.vercel.app/jewelry"
    )
      .then((res) => res.json())
      .then((data) => {
        setJewelries(data);
      });
  }, []);

  return (
    <div className="pb-20">
      <div className="pb-20">
        <img
          className="w-screen max-h-screen"
          src="/Image/Banner/bannerring3.jpg"
          alt=""
        />
      </div>
      <div className="text-center pb-8 px-40">
        <h2 className="text-5xl font-semibold pb-3">ALL JEWELRY</h2>
        <hr className="border-2 border-black" />
        <p className="font-medium py-2">
          Discover a world of beauty with our "All Jewelry" collection. From
          timeless classics to contemporary treasures, find the perfect piece to
          express your style and grace any occasion.
        </p>
      </div>
      <div className="grid grid-cols-3 row-auto gap-4">
        {jewelries.map((j) => (
          <Jewelry key={j._id} jewelry={j}></Jewelry>
        ))}
      </div>
    </div>
  );
};

export default AllJewelry;
