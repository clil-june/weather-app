import React,{useState} from "react";
import axios from "axios";
import Time from "./Time";
import "./Content.css";

export default function Contents (){
  const[content, setContent]=useState({ready: false});
let city="Tel Aviv"
let apiKey = "e75376106dace0797a632d47f62a8825";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
axios.get(`${apiUrl}&appid${apiKey}`).then(handleResponse);

function handleResponse (response) {
setContent({
  ready: true,
  //city:response.data.main.name,
  temperature:response.data.main.temp,
  description:response.data.weather[0].description,
  wind:response.data.wind.speed,
  humidity:response.data.main.humidity
});
} 
if(content.ready){
    return (
        <div className="content">
      <form autocomplete="off" id="search-form" >
      <input id="search-bar" type="search" placeholder="Enter city" />
      <input id="search" type="submit" value="search" />
     </form> 

     <button id="your-location">
        <i class="fas fa-map-marker-alt"></i>
      </button>

      <h1 id="location">
        {city}
      </h1>

      <h2>
      <span id="temperature">{Math.round(content.temperature)}</span> <small class="unit"><a href="/" id="celsius">°C</a> |<a href="/" id="fahrenheit"> °F</a></small>
      </h2>

      <div className="Description">
    <section id="dicription">{content.description}</section>
    <img src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png" alt="weather icon" id="icon" />
</div>

<Time />

<p>
        <div id="wind"><i class="fas fa-wind"></i> Wind Speed: {content.wind} km/h</div>
        <div id="humidity"><i class="fas fa-tint"></i> Humidity: {content.humidity}%</div>
      </p>
     </div> 
    );
}
else{
  return "coming soon..."
}
}