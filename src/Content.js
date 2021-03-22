import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import "./Content.css";

export default function Content (props){
    const [contents, setContents] = useState ({ready:false});

    function reciveData (respone){
        console.log(respone.data);
        setContents({
            ready: true,
            city: response.data.name,
            temp: respone.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity
        })
    }

    function search (){
        const apiKey = "691e6f287f8a1dd47bdf252b202e00d0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&&units=metric`;
axios.get(`${apiUrl}&appid${apiKey}`).then(reciveData);
    }

    if (contents.ready){
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
        {contents.city}
      </h1>

      <h2>
      <span id="temperature">{contents.temp}</span> <small class="unit"><a href="/" id="celsius">°C</a> |<a href="/" id="fahrenheit"> °F</a></small>
      </h2>

      <div className="Description">
    <section id="dicription">{contents.description}</section>
    <img src={contents.icon} alt="weather icon" id="icon" />
</div>

<Time />

<p>
        <div id="wind"><i class="fas fa-wind"></i> Wind Speed: {contents.wind} km/h</div>
        <div id="humidity"><i class="fas fa-tint"></i> Humidity: {contents.humidity}%</div>
      </p>
     </div> 
    );
    }
    else{
      search();
        return "Coming soon..."
    }
}