import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Jewelry = ({ jewelry }) => {
  const { Id, title, image, cost, Name, selling_number, popularity } = jewelry;
  // const popular = popularity;

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
            <button className="btn text-red-500 ">
              <FaRegHeart />
            </button>
            <button className="btn btn-error bg-yellow-500 text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
