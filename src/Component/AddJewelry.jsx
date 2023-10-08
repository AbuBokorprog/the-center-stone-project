import React from "react";
import { useForm, useWatch } from "react-hook-form";

const AddJewelry = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const title = data.title;
    const image = data.image;
    const cost = data.cost;
    const maker_Name = data.Name;
    const maker_Email = data.Email;
    console.log(title, image, cost, maker_Name, maker_Email);
  };

  return (
    <div>
      <div className="mb-20">
        <img
          className="w-screen max-h-screen"
          src="/src/assets/Image/Banner/banner11ring.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body px-52 font-medium"
      >
        <h2 className="text-5xl text-center font-semibold">Add Jewelry</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Jewelry Title</span>
          </label>
          <input
            type="text"
            placeholder="Type your jewelry title"
            {...register("title", { required: true })}
            className="input input-bordered border-red-600 input-lg"
            required
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className="flex gap-5 justify-between items-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Maker Name</span>
            </label>
            <input
              type="text"
              placeholder="Type your maker name"
              {...register("Name", { required: true })}
              className="input input-bordered pe-20 border-red-600 input-lg"
              required
            />
            {errors.Name && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Maker Email</span>
            </label>
            <input
              type="email"
              placeholder="Type your maker email"
              {...register("Email", { required: true })}
              className="input input-bordered pe-20 border-red-600 input-lg"
              required
            />
            {errors.Name && <span>This field is required</span>}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cost</span>
          </label>
          <input
            type="text"
            placeholder="Type your maker email"
            {...register("cost", { required: true })}
            className="input input-bordered border-red-600 input-lg"
            required
          />
          {errors.cost && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Paste PhotoURL"
            {...register("image", { required: true })}
            className="input input-bordered border-red-600 input-lg"
            required
          />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error bg-red-600">Add Jewelry</button>
        </div>
      </form>
    </div>
  );
};

export default AddJewelry;
