import Search from "./components/Search";
import { WiDayCloudy } from "react-icons/wi";
import CurrentWeather from "./components/CurrentWeather";
import { Weather_API_URL, API_KEY } from "./api";
import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Background from "./components/Background";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [lati, setLati] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    axios(`${Weather_API_URL}/weather?lat=${lati}&lon=${long}&appid=${API_KEY}`)
      .then((res) => {
        setCurrentWeather({ city: res.data.name, ...res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios(
      `${Weather_API_URL}/forecast?lat=${lati}&lon=${long}&appid=${API_KEY}`
    )
      .then((res) => {
        setForecast({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lati, long]);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const forecastFetch = fetch(
      `${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(forecast);

  return (
    <div className="main">
      <Background data={currentWeather} />
      <div className="app">
        <div className="title">
          <h2>
            Weather Forecast <WiDayCloudy />
          </h2>
        </div>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
