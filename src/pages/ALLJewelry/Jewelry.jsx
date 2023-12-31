import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { authContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Jewelry = ({ jewelry }) => {
  const { user } = useContext(authContext);
  const { title, image, cost, Name, selling_number } = jewelry;
  const [isWishlist, setIsWishlist] = useState(false);

  const addHandler = () => {
    if (user?.email) {
      const email = user?.email;
      const cart = { title, image, cost, email };
      fetch("https://center-stone-server-side.vercel.app/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
      })
        .then((res) => res.json())
        .then((data) => {});
      alert("Added to cart");
    } else {
      alert("Please Sign In");
      return <Navigate to={"/login"} replace={true}></Navigate>;
    }
  };

  const wishHandler = () => {
    if (user?.email) {
      const email = user.email;

      if (isWishlist === false) {
        const wishlistItem = {
          title,
          image,
          cost,
          selling_number,
          Name,
          email,
        };

        fetch("https://center-stone-server-side.vercel.app/wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(wishlistItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              alert("Added wishlist");
              setIsWishlist(true);
            }
          });
      } else {
        fetch(
          `https://center-stone-server-side.vercel.app/wishlist/${email}/${title}`,
          {
            method: "DELETE",
            headers: { "content-type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedItem) {
              alert("Removed wishlist");
              setIsWishlist(false);
            }
          });
      }
    } else {
      alert("Please login");
      setIsWishlist(false);
    }
  };

  return (
    <div>
      <div className="card mx-auto w-fit px-1 lg:px-0 lg:w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-fit" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {title}</h2>
          <div className="font-medium">
            <p className="text-red-600">Price: {cost}</p>
            <p>Maker Name: {Name}</p>
            <p>Sold: {selling_number}</p>
          </div>
          <div className="card-actions justify-between">
            <button onClick={wishHandler} className="btn text-red-500 ">
              {/* {isWishlist === false ? <FaRegHeart /> : <FaHeart />} */}
              <FaHeart />
            </button>
            <button
              onClick={addHandler}
              className="btn btn-error bg-yellow-500 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
