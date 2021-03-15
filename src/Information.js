import React from "react";
import "./Information.css";

export default function Infomation (){
    return(
        <p>
        <div id="wind"><i class="fas fa-wind"></i> Wind: 37 km/h</div>
        <div id="humidity"><i class="fas fa-tint"></i> Humidity: 54%</div>
      </p>
    );
}