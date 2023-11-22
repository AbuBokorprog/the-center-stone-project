import React from "react";

const Jewelry = (props) => {
  //console.log(props.jewelry);
  const { Id, title, image, cost, Name, selling_number, popularity } =
    props.jewelry;
  const popular = popularity;
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
          <div className="card-actions justify-start">
            <button className="btn btn-warning bg-yellow-500 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
