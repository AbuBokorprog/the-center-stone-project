import React from "react";
import { Link } from "react-router-dom";

const BestProduct = (props) => {
  const { title, image, id } = props.best;
  return (
    <Link to={`/jewelry/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="lg:h-fit w-fit" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BestProduct;
