import React from "react";
import styled from "styled-components";
import { WiDayCloudy, WiDaySunny, WiDayThunderstorm } from "react-icons/wi";
import { BsCloudDrizzle, BsFillCloudRainFill, BsSnow2 } from "react-icons/bs";

const CurrentWeather = ({ data }) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  .bottom {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 50%;
    margin: 5.5rem auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .top {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 0.5rem;
  }
  .bold {
    color: #fff;
  }
`;

export default CurrentWeather;
