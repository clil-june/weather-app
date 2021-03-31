import React from "react";
import Time from "./Time";
import WeahterIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherContent(props){
    return(
    <div className="WeatherContent">
    <h1 id="location">
        {props.data.name}
      </h1>

      <Temperature celsius={props.data.temperature} />

      <div className="description">
    <section id="dicription">{props.data.description}</section>
    <WeahterIcon code={props.data.icon} />
</div>

<Time />

<ul>
        <li id="wind"><i className="fas fa-wind"></i> Wind Speed: {Math.round(props.data.wind)} km/h</li>
        <li id="humidity"><i className="fas fa-tint"></i> Humidity: {Math.round(props.data.humidity)}%</li>
      </ul>
     </div>);
}