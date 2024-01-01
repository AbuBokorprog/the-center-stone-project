import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setWishlist(data);
      });
  }, [user?.email]);
  return (
    <div className="pb-20">
      <h1 className="text-3xl mb-6">Your Wishlist</h1>

      {wishlist.map((c) => (
        <div key={c._id}>
          <div className="flex mx-auto justify-between items-center">
            <figure>
              <img src={c.image} alt="" className="w-32 h-20" />
            </figure>
            <h6 className="w-60">{c.title}</h6>
            <button className="btn btn-warning">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;