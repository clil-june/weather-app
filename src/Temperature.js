import React from "react";
import "./Temperature.css"

export default function Temperature (){
    return (
        <h2>
      <span id="temperature">16</span> <small class="unit"><a href="#" id="celsius">°C</a> |<a href="#" id="fahrenheit"> °F</a></small>
      </h2>
    );
}