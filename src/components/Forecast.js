import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { WiDayCloudy, WiDaySunny, WiDayThunderstorm } from "react-icons/wi";
import { BsCloudDrizzle, BsFillCloudRainFill, BsSnow2 } from "react-icons/bs";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  // to get day in a week
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  {item.weather[0].main === "Clouds" && (
                    <WiDayCloudy className="small-icon" />
                  )}
                  {item.weather[0].main === "Clear" && (
                    <WiDaySunny className="small-icon" />
                  )}
                  {item.weather[0].main === "Drizzle" && (
                    <BsCloudDrizzle className="small-icon" />
                  )}
                  {item.weather[0].main === "Rain" && (
                    <BsFillCloudRainFill className="small-icon" />
                  )}
                  {item.weather[0].main === "Snow" && (
                    <BsSnow2 className="small-icon" />
                  )}
                  {item.weather[0].main === "Thunderstorm" && (
                    <WiDayThunderstorm className="small-icon" />
                  )}
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">{item.weather[0].main}</label>
                  <label className="min-max">
                    {Math.trunc(item.main.temp_min - 273.15)} °C /
                    {Math.trunc(item.main.temp_max - 273.15)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-class-grid">
                <div className="daily-grid-details-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hpa</label>
                </div>
                <div className="daily-grid-details-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-grid-details-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-grid-details-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-grid-details-item">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-grid-details-item">
                  <label>Feels Like</label>
                  <label>{Math.trunc(item.main.feels_like - 273.15)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
