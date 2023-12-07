import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://center-stone-server-side.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="mb-20">
      <div className="mb-20">
        <img
          className="w-screen max-h-96"
          src="/Image/Banner/banner9.jpg"
          alt="Blogs"
        />
      </div>
      <div className="pb-4">
        <h2 className="text-center font-semibold text-5xl">All Blogs</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {blogs.map((b) => (
          <Blog key={b._id} blog={b}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
