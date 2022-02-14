import axios from "axios";

const API_KEY = "f956613a8a36ce0998c1f91779bd61b3";

class WeatherApi {
  constructor(city) {
    this.city = city;
  }

 async connection() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}`;
    let resp = await axios.get(url);
    return resp;
  }
}

export default WeatherApi;
