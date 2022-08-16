import React from "react";
import Bg from "../assets/sunset.jpg";

const Background = () => {
  return (
    <div>
      <img src={Bg} alt="background" className="bg-img" />
    </div>
  );
};

export default Background;
