import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="py-10">
      <img
        className="bg-cover h-96 mx-auto"
        src="/src/assets/Image/Error.jpg"
        alt="Error Page"
      />
      <div className="mx-auto text-center">
        <button className="">
          <Link to="/" className="btn px-10 font-medium bg-red-600 py-4">
            Go Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
