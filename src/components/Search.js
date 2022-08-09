import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import styled from "styled-components";
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
    <Container>
      <AsyncPaginate
        className="input-city"
        placeholder="Enter City name"
        debounceTimeout={600}
        value={location}
        onChange={handleonChange}
        loadOptions={loadOptions}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  .input-city {
    width: 40%;
    font-size: 1.5rem;
    align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0);
    color: #000;
    :placeholder {
      color: black;
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .input-city {
      width: 100%;
    }
  }
`;

export default Search;
