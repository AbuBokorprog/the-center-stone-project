import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Cart = () => {
  const { user } = useContext(authContext);
  const [carts, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setCart(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
