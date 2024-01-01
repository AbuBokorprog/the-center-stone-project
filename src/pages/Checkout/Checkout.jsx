import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(authContext);
  const [carts, setCart] = useState([]);
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data, carts, overallTotal);
    alert("Payment success!");
  };

  return (
    <div className="pb-10 lg:pb-20">
      <div className="flex gap-6">
        <div className="w-full">
          <form>
            <div>
              <label>Name</label>
              <input
                placeholder="Type Your Name"
                {...register("name", { required: true, maxLength: 20 })}
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Phone</label>
                <input
                  placeholder="Type Your Phone"
                  type="number"
                  {...register("Phone", { required: true, maxLength: 20 })}
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Type Your Email"
                  {...register("email", { required: true, maxLength: 20 })}
                  className="input input-bordered input-secondary w-full"
                />
              </div>
            </div>
            <div>
              <label>District</label>
              <input
                placeholder="Type Your District"
                {...register("District", { required: true, maxLength: 20 })}
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div>
              <label>Area</label>
              <input
                placeholder="Type Your Area Name"
                {...register("Area", { required: true, maxLength: 20 })}
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div>
              <label>Address</label>
              <input
                placeholder="Type Your Address"
                {...register("Address", { required: true, maxLength: 20 })}
                className="input input-bordered input-secondary w-full"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <Cart
            img={"w-20 h-20"}
            gap={"gap-4"}
            payment={
              <div className="text-right mt-10 mx-auto ">
                <Link
                  onClick={handleSubmit(onSubmit)}
                  className="btn btn-warning"
                >
                  Payment
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
// console.log(data)

export default Checkout;
