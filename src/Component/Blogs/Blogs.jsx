import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="mb-20">
      <div className="mb-20">
        <img
          className="w-screen max-h-screen"
          src="/src/assets/Image/Banner/banner9.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-center font-semibold text-5xl">Blogs</h2>
      </div>
    </div>
  );
};

export default Blogs;
