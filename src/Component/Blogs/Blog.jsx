import React from "react";

const Blog = ({ blog }) => {
  const { title, author, description, likes, image } = blog;
  return (
    <div>
      <div className="card mx-auto card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="h-44" src={image} alt="blog Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>
            Author : <small>{author}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
