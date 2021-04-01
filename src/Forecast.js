import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forcast(props){
    let [loaded, setLoaded]=useState(false);
    let [weatherData , setWeatherData]=useState(null);

function handleResponse(response){
    setWeatherData(response.data.daily);
    setLoaded(true);
}

if (loaded){
  return(
        <div>
        <ul className="forecast">
    <li className="forecast-list">
      <ForecastDay data={weatherData[1]} />
    </li>
    <li className="forecast-list">
      <ForecastDay data={weatherData[2]} />
    </li>
    <li className="forecast-list">
      <ForecastDay data={weatherData[3]} />
    </li>
    <li className="forecast-list">
      <ForecastDay data={weatherData[4]} />
    </li>
    <li className="forecast-list">
      <ForecastDay data={weatherData[5]} />
    </li>
       </ul>
    </div>
    );  
}
else{
    let apiKey = "691e6f287f8a1dd47bdf252b202e00d0";
    let lon= props.coords.lon
    let lat= props.coords.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`

    axios.get(`${apiUrl}&appid${apiKey}`).then(handleResponse);

    return null;
}
    
}