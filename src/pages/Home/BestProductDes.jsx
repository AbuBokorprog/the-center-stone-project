import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const BestProductDes = () => {
  const { user } = useContext(authContext);
  const { id } = useParams();
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch("/bestProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setJewelry(data);
      });
  }, []);

  const singleProduct = jewelry.find((j) => j.id == id);

  const addHandler = () => {
    if (user?.email) {
      const email = user?.email;
      const cart = {
        title: singleProduct?.title,
        image: singleProduct?.image,
        cost: singleProduct?.cost,
        email,
      };
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

  return (
    <div className="flex gap-10 pb-10 lg:pb-20">
      <img
        src={singleProduct?.image}
        alt={singleProduct?.title}
        className="w-96"
      />
      <div>
        <h1 className="text-6xl font-bold">{singleProduct?.title}</h1>
        <p className="text-3xl font-semibold my-4">
          Price: ${singleProduct?.cost}
        </p>
        <div className="text-center my-10">
          <button onClick={addHandler} className="btn btn-warning w-96 ">
            Add Cart
          </button>
        </div>
        <h3 className="text-2xl font-medium">
          Maker Name: {singleProduct?.maker_Name}
        </h3>
        <p className="font-semibold ">
          Popularity: {singleProduct?.popularity}
        </p>
      </div>
    </div>
  );
};

export default BestProductDes;
