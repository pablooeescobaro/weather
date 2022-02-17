import React from "react";
import DataWeather from "../../../models/data";
import styles from "./Card.module.scss";

type Maybe<T> = T | null;

interface Props {
  data: Maybe<DataWeather>;
  requestString?: Maybe<string>;
}

export const Card = ({ data, requestString }: Props) => {
  return (
    <>
      {data !== null ? (
        <div className={styles.card}>
          <div className={styles.card_top}>
            <div className={styles.card_location}>
              <p>{data.name}</p>
            </div>
            <div className={styles.card_temp}>
              {(data.main.temp - 273.15).toFixed(0) + "°С"}
            </div>
            <div className={styles.card_desc}>{data.weather[0].main}</div>
          </div>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_item}>
              <div className={styles.card_bottom_item_title}>Feels</div>
              <div className={styles.card_bottom_item_separator}></div>
              <div className={styles.card_bottom_item_value}>
                {(data.main.feels_like - 273.15).toFixed(0) + "°С"}
              </div>
            </div>
            <div className={styles.card_bottom_item}>
              <div className={styles.card_bottom_item_title}>Humidity</div>
              <div className={styles.card_bottom_item_separator}></div>
              <div className={styles.card_bottom_item_value}>
                {data.main.humidity + "%"}
              </div>
            </div>
            <div className={styles.card_bottom_item}>
              <div className={styles.card_bottom_item_title}>Wind</div>
              <div className={styles.card_bottom_item_separator}></div>
              <div className={styles.card_bottom_item_value}>
                {(data.wind.speed * 3.6).toFixed(0) + "KPH"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <p>
            There are no cities for
            <span className={styles.empty_request}>{` ${requestString} `}</span>
            request.
          </p>
        </div>
      )}
    </>
  );
};

export default Card;
