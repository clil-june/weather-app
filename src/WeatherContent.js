import React from "react";
import CityName from "./CityName";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function WeatherContent(props){
    return(
    <div className="WeatherContent">
      <div className="container">
        
    <CityName name={props.data.name} />

      <Temperature celsius={props.data.temperature} />

      <div className="description">
    <section id="description">{props.data.description}</section>
    <Icon code={props.data.icon} size={75} />
</div>

<Time />

<ul>
        <li id="wind"><i className="fas fa-wind"></i> Wind Speed: {Math.round(props.data.wind)} km/h</li>
        <li id="humidity"><i className="fas fa-tint"></i> Humidity: {Math.round(props.data.humidity)}%</li>
      </ul>
      </div>
      </div>
     
     );
}