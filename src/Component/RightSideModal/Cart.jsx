import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(authContext);
  const [carts, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [overallTotal, setOverallTotal] = useState("");

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          `https://center-stone-server-side.vercel.app/cart/${user?.email}`
        );
        const data = await response.json();
        setCart(data);
        const total = data.reduce(
          (acc, item) => acc + parseFloat(item.cost) * item.quantity,
          0
        );
        setOverallTotal(total);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user?.email]);

  const updateQuantity = async (cartId, newQuantity) => {
    try {
      const response = await fetch(
        `https://center-stone-server-side.vercel.app/cart/${cartId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );

      if (response.ok) {
        setCart((prevCarts) =>
          prevCarts.map((cart) =>
            cart._id === cartId ? { ...cart, quantity: newQuantity } : cart
          )
        );
      } else {
        console.error("Failed to update quantity on the server");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const plusHandler = (cartId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(cartId, newQuantity);
  };

  const minusHandler = (cartId, currentQuantity) => {
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      updateQuantity(cartId, newQuantity);
    }
  };

  const deleteHandler = (email, title) => {
    fetch(
      `https://center-stone-server-side.vercel.app/cart/${email}/${title}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCart((prevCarts) =>
            prevCarts.filter(
              (cart) => cart.email !== email || cart.title !== title
            )
          );

          alert("Remove from cart");
        } else {
          alert("Item not found in the cart");
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <>
      {carts.length > 0 ? (
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
              <p className="font-bold">
                Price: {parseInt(c.cost) * c.quantity}
              </p>
            </div>
          ))}

          <div className="text-center mt-10 mx-auto flex justify-center items-center gap-20">
            <Link to={"/checkout"} className="btn btn-warning">
              Checkout
            </Link>
            <Link to={"/cart"} className="btn btn-warning">
              View Cart
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-auto text-center">
          <p>Your Cart is Empty</p>
        </div>
      )}
    </>
  );
};

export default Cart;
