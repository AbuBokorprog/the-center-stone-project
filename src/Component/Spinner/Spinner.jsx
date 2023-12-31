import React, { useState, useEffect } from "react";
import "./Spinner.css";

const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 15) % 360);
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="full-screen-spinner">
      <div
        className="jewelry-spinner"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="gem"></div>
      </div>
    </div>
  );
};

export default Spinner;
