import Search from "./components/Search";
import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";
import CurrentWeather from "./components/CurrentWeather";
import { Weather_API_URL, API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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
    <Container>
      <h2>
        Weather Forecast <WiDayCloudy />
      </h2>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  h2 {
    font-size: 2rem;
    color: white;
  }
`;
export default App;
