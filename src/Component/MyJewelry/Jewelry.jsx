import React from "react";

const Jewelry = (props) => {
  //   console.log(props.Jewelry);
  const { Id, title, image, cost, maker_Name, selling_number, popularity } =
    props.Jewelry;
  return (
    <div>
      <div className="card card-compact w-fit px-1 lg:px-0 lg:w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-fit" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {title}</h2>
          <div className="font-medium">
            <p className="text-red-600">Price: {cost}</p>
            <p>Maker Name: {maker_Name}</p>
            <p>Sold: {selling_number}</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
