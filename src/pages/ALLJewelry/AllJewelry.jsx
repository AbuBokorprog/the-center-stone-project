import { useEffect, useState } from "react";
import Jewelry from "./Jewelry";
import JewelrySkeleton from "../../Component/Spinner/JewelrySkeleton";

const AllJewelry = () => {
  const [jewelries, setJewelries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://center-stone-server-side.vercel.app/jewelry")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setJewelries(data);
      });
  }, []);

  return (
    <div className="pb-10 lg:pb-20">
      <div className="pb-10 lg:pb-20">
        <img
          className="w-screen max-h-96"
          src="/Image/Banner/banner9.jpg"
          alt="Banner Image"
        />
      </div>
      <div className="text-center pb-8 px-5 lg:px-40">
        <h2 className="text-5xl font-semibold pb-3">ALL JEWELRY</h2>
        <hr className="border-2 border-black" />
        <p className="font-medium py-2">
          Discover a world of beauty with our All Jewelry collection. From
          timeless classics to contemporary treasures, find the perfect piece to
          express your style and grace any occasion.
        </p>
      </div>
      {loading ? (
        <JewelrySkeleton />
      ) : (
        <div className="grid grid-cols-1 mx-auto items-center lg:grid-cols-3 row-auto lg:gap-4">
          {jewelries.map((j) => (
            <Jewelry key={j._id} jewelry={j} loading={loading}></Jewelry>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJewelry;
