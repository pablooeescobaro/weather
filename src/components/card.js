import React from "react";
import "../styles/card.scss";

function Card(props) {
  const data = props.data;
  if (data === null) {
    if (props.requestString === "") {
      return <div></div>;
    } else {
      return (
        <div className="empty-state">
          <p>
            There are no cities for
            <span className="empty-state_request">{` ${props.requestString} `}</span>
            request.
          </p>
        </div>
      );
    }
  } else {
    return (
      <div className="card">
        <div className="card_top">
          <div className="card_location">
            <p>{data.name}</p>
          </div>
          <div className="card_temp">
            {(data.main.temp - 273.15).toFixed(0) + "°С"}
          </div>
          <div className="card_desc">{data.weather[0].main}</div>
        </div>
        <div className="card_bottom">
          <div className="card_bottom_item">
            <div className="card_bottom_item_title">Feels</div>
            <div className="card_bottom_item_separator"></div>
            <div className="card_bottom_item_value">
              {(data.main.feels_like - 273.15).toFixed(0) + "°С"}
            </div>
          </div>
          <div className="card_bottom_item">
            <div className="card_bottom_item_title">Humidity</div>
            <div className="card_bottom_item_separator"></div>
            <div className="card_bottom_item_value">
              {data.main.humidity + "%"}
            </div>
          </div>
          <div className="card_bottom_item">
            <div className="card_bottom_item_title">Wind</div>
            <div className="card_bottom_item_separator"></div>
            <div className="card_bottom_item_value">
              {(data.wind.speed * 3.6).toFixed(0) + "KPH"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
