import React, { useEffect, useState } from "react";

const BestProduct = (props) => {
  // console.log(props.best);
  //console.log(best);
  const { title, image, id, cost, selling_number, popularity, maker_Name } =
    props.best;
  return (
    <div>
      <div className="card card-compact w-96z bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-fit" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
