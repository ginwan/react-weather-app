import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, Get_URL } from "../api";

const Search = ({ onSearchChange }) => {
  const [location, setLocation] = useState(null);

  const loadOptions = (city) => {
    return fetch(
      `${Get_URL}/cities?minPopulation=1000000&namePrefix=${city}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleonChange = (searchData) => {
    setLocation(searchData);
    onSearchChange(searchData);
    // search suggestions
  };

  return (
    <div className="input-container">
      <AsyncPaginate
        className="input-city"
        placeholder="Enter City name"
        debounceTimeout={600}
        value={location}
        onChange={handleonChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
