import React from "react";
import { WiDayCloudy, WiDaySunny, WiDayThunderstorm } from "react-icons/wi";
import {
  BsCloudDrizzle,
  BsFillCloudRainFill,
  BsSnow2,
  BsFillCloudHazeFill,
} from "react-icons/bs";

const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="weather-details">
        <div className="top">
          <div className="loc-temp">
            <div className="location">
              <h2>{data.city}</h2>
            </div>
            <div className="temp">
              <h2>{Math.trunc(data.main.temp - 273.15)} °C</h2>
            </div>
          </div>
          <div className="weather">
            <h2>
              {data.weather[0].main}{" "}
              {data.weather[0].main === "Clouds" && <WiDayCloudy />}
              {data.weather[0].main === "Clear" && <WiDaySunny />}
              {data.weather[0].main === "Drizzle" && <BsCloudDrizzle />}
              {data.weather[0].main === "Rain" && <BsFillCloudRainFill />}
              {data.weather[0].main === "Snow" && <BsSnow2 />}
              {data.weather[0].main === "Thunderstorm" && <WiDayThunderstorm />}
              {data.weather[0].main === "Haze" && <BsFillCloudHazeFill />}
            </h2>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <h3 className="bold">
              {Math.trunc(data.main.feels_like - 273.15)} °C
            </h3>
            <p className="bold">Feels Like</p>
          </div>
          <div className="humidity">
            <h3 className="bold">{data.main.humidity}%</h3>
            <p className="bold">Humidity</p>
          </div>
          <div className="wind">
            <h3 className="bold">{data.wind.speed} MPH</h3>
            <p className="bold">Wind Speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
