import axios from "axios";
import React, { useState, KeyboardEvent } from "react";
import { Button, Card, Input } from "./components";

function App() {
  const [location, setLocation] = useState(String);
  const [data, setData] = useState(null);
  const [requestString, setRequestString] = useState("");

  const API_KEY = "f956613a8a36ce0998c1f91779bd61b3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      search(location);
    }
  };

  const search = (loc: string) => {
    if (loc !== "") {
      axios
        .get(url)
        .then((resp) => {
          console.log(resp.data);
          setRequestString(location);
          setData(resp.data);
        })
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
            onChange={(string: string) => setLocation(string)}
            onKeyPress={searchLocation}
            className="app_input"
          ></Input>
          <Button onClick={() => search(location ?? "")}>Search</Button>
        </div>
        {requestString.length && (
          <Card data={data} requestString={requestString} />
        )}
      </div>
    </div>
  );
}

export default App;
