import React from "react";

const Jewelry = (props) => {
  //console.log(props.jewelry);
  const { Id, title, image, cost, maker_Name, selling_number } = props.jewelry;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-fit" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {title}</h2>
          <div className="font-medium">
            <p>Price: {cost}</p>
            <p>Maker Name: {maker_Name}</p>
            <p>Sold: {selling_number}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-error bg-red-600">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;