import React from "react";
import Bg from "../assets/bg2.jpg";
import clear from "../assets/clear.jpg";
import clouds from "../assets/clouds.jpg";
import drizzle from "../assets/drizzle.jpg";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";
import thunder from "../assets/thunder.jpg";
import haze from "../assets/haze.jpg";

const Background = ({ data }) => {
  if (data) {
    if (data.weather[0].main === "Clear") {
      return <img src={clear} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Clouds") {
      return <img src={clouds} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Drizzle") {
      return <img src={drizzle} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Rain") {
      return <img src={rain} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Snow") {
      return <img src={snow} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Thunderstorm") {
      return <img src={thunder} alt="background" className="bg-img" />;
    } else if (data.weather[0].main === "Haze") {
      return <img src={haze} alt="background" className="bg-img" />;
    } else {
      return <img src={Bg} alt="background" className="bg-img" />;
    }
  } else {
    return <img src={Bg} alt="background" className="bg-img" />;
  }
};

export default Background;
