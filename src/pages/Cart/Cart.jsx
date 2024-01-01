import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Cart = ({ img, gap, payment }) => {
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
        setOverallTotal((total / 100) * 5 + total);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [user?.email]);

  const deleteHandler = (email, title) => {
    fetch(
      `https://center-stone-server-side.vercel.app/cart/${email}/${title}`,
      {
        method: "DELETE", // Correct the method to "DELETE"
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
    <div className="pb-10 lg:pb-20">
      {carts.length > 0 ? (
        <div>
          {carts.map((c) => (
            <div key={c._id}>
              <div
                className={`flex ${
                  gap ? gap : "gap-10"
                } mx-auto justify-between items-center my-2`}
              >
                <figure>
                  <img
                    src={c.image}
                    alt={c.title}
                    className={`${img ? img : "w-60 h-60"} `}
                  />
                </figure>
                <h6 className="text-3xl mb-6 w-96">{c.title}</h6>
                <div className="flex gap-4 items-center">
                  <p className="font-semibold">Quantity: {c.quantity}</p>
                </div>
                <div>
                  <p className="font-bold">
                    Price: {parseInt(c.cost) * c.quantity}
                  </p>
                </div>
                <button onClick={() => deleteHandler(user?.email, c.title)}>
                  X
                </button>
              </div>
            </div>
          ))}

          <div className="">
            <div className="my-8 card">
              <div className="flex justify-between my-1">
                <h2 className="text-3xl">Total:</h2>
                <h2 className="text-3xl">${overallTotal}</h2>
              </div>
              <div className="flex justify-between my-1">
                <h2 className="text-3xl">Tax $ Shipping Charge:</h2>
                <h2 className="text-3xl">$5%</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-3xl">Total Amount:</h2>
                <h2 className="text-3xl text-yellow-400">{overallTotal}</h2>
              </div>
            </div>
            {payment ? (
              payment
            ) : (
              <div className="text-right mt-10 mx-auto ">
                <Link to={"/checkout"} className="btn btn-warning">
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
