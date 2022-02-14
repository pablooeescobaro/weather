import axios from "axios";
import React, { useState } from "react";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const [requestString, setRequestString] = useState("");

  const API_KEY = "f956613a8a36ce0998c1f91779bd61b3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = (loc) => {
    if (loc !== "") {
      axios
        .get(url)
        .then((resp) => setData(resp.data))
        .catch((error) => {
          setData(null);
          setRequestString(location);
        });
    }
  };

  return (
    <div className="app">
      <div className="app_wrapper">
        <div className="app_search-bar">
          <Input
            value={location}
            onChange={(event) => setLocation(event)}
            onKeyPress={searchLocation}
            className="app_input"
          ></Input>
          <Button text="Search" onClick={() => search(location)}></Button>
        </div>
        <Card data={data} request={location} requestString={requestString}></Card>
      </div>
    </div>
  );
}

export default App;
