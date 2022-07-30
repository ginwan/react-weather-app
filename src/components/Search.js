import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f5d59bff4cda49e3fecc1ead0a115ab`;

  const getForecast = async (e) => {
    if (e.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div>
      <Input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={getForecast}
      />
    </div>
  );
};

const Input = styled.input`
  width: 35%;
  font-size: 1.5rem;
  padding: 16px 20px;
  border: 2px none;
  border-radius: 8px;
  ::placeholder {
    color: gray;
    font-size: 1.5rem;
    margin-start: 50px;
  }
`;

export default Search;
