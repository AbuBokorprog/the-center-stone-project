import React from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="number"
              {...register("Phone", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label>District</label>
            <input
              {...register("District", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label>Area</label>
            <input
              {...register("Area", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label>Address</label>
            <input
              {...register("Address", { required: true, maxLength: 20 })}
              className="input input-bordered input-secondary w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
