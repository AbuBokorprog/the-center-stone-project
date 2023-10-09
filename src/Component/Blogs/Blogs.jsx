import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://the-center-stone-server-6cglaabc4-abubokorprog.vercel.app/blogs"
    )
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
          src="/public/Image/Banner/banner9.jpg"
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
