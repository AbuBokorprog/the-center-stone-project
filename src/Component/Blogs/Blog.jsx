import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);
  const { Description, Writer, Image } = blog;
  return (
    <div>
      <div className="card mx-auto card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-fit" src={Image} alt="blog Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Writer: {Writer}</h2>
          <p>{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
