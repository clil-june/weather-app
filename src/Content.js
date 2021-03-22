import React from "react";
import axios from "axios";
import Time from "./Time";
import "./Content.css";

export default function Content (){
  
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
        Sde Boker
      </h1>

      <h2>
      <span id="temperature">16</span> <small class="unit"><a href="/" id="celsius">°C</a> |<a href="/" id="fahrenheit"> °F</a></small>
      </h2>

      <div className="Description">
    <section id="dicription">Cloudy</section>
    <img src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png" alt="weather icon" id="icon" />
</div>

<Time />

<p>
        <div id="wind"><i class="fas fa-wind"></i> Wind Speed: 37 km/h</div>
        <div id="humidity"><i class="fas fa-tint"></i> Humidity: 54%</div>
      </p>
     </div> 
    );
}