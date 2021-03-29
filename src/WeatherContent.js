import React from "react";
import Time from "./Time";

export default function WeatherContent(props){
    return(
    <div className="WeatherContent">
    <h1 id="location">
        {props.data.name}
      </h1>

      <h2>
      <span id="temperature">{Math.round(props.data.temperature)}</span> <small className="unit"><a href="/" id="celsius">°C</a> |<a href="/" id="fahrenheit"> °F</a></small>
      </h2>

      <div className="description">
    <section id="dicription">{props.data.description}</section>
    <img src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png" alt="weather icon" id="icon" />
</div>

<Time />

<ul>
        <li id="wind"><i className="fas fa-wind"></i> Wind Speed: {Math.round(props.data.wind)} km/h</li>
        <li id="humidity"><i className="fas fa-tint"></i> Humidity: {Math.round(props.data.humidity)}%</li>
      </ul>
     </div>);
}