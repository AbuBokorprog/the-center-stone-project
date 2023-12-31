import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Cart = () => {
  const { user } = useContext(authContext);
  const [carts, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [overallTotal, setOverallTotal] = useState("");

  useEffect(() => {
    fetch(`https://center-stone-server-side.vercel.app/cart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCart(data);
        const total = data.reduce(
          (acc, item) => acc + parseFloat(item.cost) * item.quantity,
          0
        );
        setOverallTotal(total);
      });
  }, [user?.email]);

  const plusHandler = (cartId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;

    setCart((prevCarts) =>
      prevCarts.map((cart) =>
        cart._id === cartId ? { ...cart, quantity: newQuantity } : cart
      )
    );

    fetch(`https://center-stone-server-side.vercel.app/cart/${cartId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  };
  const minusHandler = (cartId, currentQuantity) => {
    const newQuantity = currentQuantity - 1;

    if (1 <= newQuantity) {
      setCart((prevCarts) =>
        prevCarts.map((cart) =>
          cart._id === cartId ? { ...cart, quantity: newQuantity } : cart
        )
      );
      fetch(`https://center-stone-server-side.vercel.app/cart/${cartId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {})
        .catch((error) => {
          console.error("Error updating quantity:", error);
        });
    } else {
      alert("minimum quantity 1");
    }
  };

  const deleteHandler = (email, title) => {
    fetch(
      `https://center-stone-server-side.vercel.app/cart/${email}/${title}`,
      {
        method: "Delete",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("remove wishlist");
        }
      });
  };

  return (
    <div className="pb-20">
      <h1 className="text-3xl mb-6">Your Cart</h1>
      {carts.map((c) => (
        <div key={c._id}>
          <div className="flex gap-10 mx-auto items-center my-2">
            <figure>
              <img src={c.image} alt="" className="w-32 h-20" />
            </figure>
            <h6 className="w-44">{c.title}</h6>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => minusHandler(c._id, c.quantity)}
                className="btn"
              >
                -
              </button>
              <p>{c.quantity}</p>
              <button
                onClick={() => plusHandler(c._id, c.quantity)}
                className="btn"
              >
                +
              </button>
            </div>
            <button onClick={() => deleteHandler(user?.email, c.title)}>
              X
            </button>
          </div>
          <hr />
          <p className="font-bold">Price: {parseInt(c.cost) * c.quantity}</p>
        </div>
      ))}

      <div className="flex justify-between my-1">
        <h2 className="text-3xl">Total:</h2>
        <h2 className="text-3xl">${overallTotal}</h2>
      </div>
      <div className="flex justify-between my-1">
        <h2 className="text-3xl">Tax:</h2>
        <h2 className="text-3xl">$5%</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="text-3xl">Total Amount:</h2>
        <h2 className="text-3xl">{(overallTotal / 100) * 5 + overallTotal}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
