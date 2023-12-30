import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(authContext);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h1>Wishlist</h1>
    </div>
  );
};

export default Wishlist;
