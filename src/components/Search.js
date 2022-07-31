import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { WiDayCloudy, WiDaySunny, WiDayThunderstorm } from "react-icons/wi";
import { BsCloudDrizzle, BsFillCloudRainFill, BsSnow2 } from "react-icons/bs";

const Search = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [celsius, setCelsius] = useState(0);
  const [feelCel, setFeelCel] = useState(0);
  let temp = Math.trunc(celsius);
  let feel = Math.trunc(feelCel);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f5d59bff4cda49e3fecc1ead0a115ab`;

  const getForecast = async (e) => {
    if (e.key === "Enter") {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setCelsius(response.data.main.temp - 273.15);
          setFeelCel(response.data.main.feels_like - 273.15);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
      setLocation("");
    }
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={getForecast}
      />
      <div className="weather-details">
        <div className="top">
          <div className="loc-temp">
            <div className="location">
              <h2>{data.name}</h2>
            </div>
            <div className="temp">{data.main ? <h2>{temp} °C</h2> : null}</div>
          </div>
          <div className="weather">
            {data.weather ? (
              <h2>
                {data.weather[0].main}{" "}
                {data.weather[0].main === "Clouds" && <WiDayCloudy />}
                {data.weather[0].main === "Clear" && <WiDaySunny />}
                {data.weather[0].main === "Drizzle" && <BsCloudDrizzle />}
                {data.weather[0].main === "Rain" && <BsFillCloudRainFill />}
                {data.weather[0].main === "Snow" && <BsSnow2 />}
                {data.weather[0].main === "Thunderstorm" && (
                  <WiDayThunderstorm />
                )}
              </h2>
            ) : null}
          </div>
        </div>
        {data.main ? (
          <div className="bottom">
            <div className="feels">
              {data.main ? <h3 className="bold">{feel} °C</h3> : null}
              <p className="bold">feels like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <h3 className="bold">{data.main.humidity}%</h3>
              ) : null}
              <p className="bold">humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <h3 className="bold">{data.wind.speed} MPH</h3>
              ) : null}
              <p className="bold">wind speed</p>
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

const Container = styled.div`
  input {
    width: 35%;
    font-size: 1.5rem;
    padding: 16px 20px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    ::placeholder {
      color: #fff;
      font-size: 1rem;
      margin-start: 50px;
    }
  }
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

export default Search;
