import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import React from "react";
import ReactDOM from "react-dom";
import styles from "./Weather.css";

const Weather = (props) => {
    return (
      <ReactWeather
          forecast="today" 
          unit="imperial" 
          apikey="a4922081a81a4785b38191553181604"
          type="city"
          city="Austin" />
    );
  };

  export default Weather;