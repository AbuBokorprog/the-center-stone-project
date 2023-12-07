import React, { useState, useEffect } from "react";
import "./Spinner.css";

const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 30) % 360);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="spinner"
      style={{ transform: `rotate(${rotation}deg)` }}
    ></div>
  );
};

export default Spinner;
