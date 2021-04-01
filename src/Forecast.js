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
        <ul className="forecast">
         {weatherData.map(function(dailyForecast , index){
           if (index < 6 & index > 0){
           return (<li key={index} className="forecast-list">
      <ForecastDay data={dailyForecast} />
    </li>);}
    else{
      return null;
    }
         })}
            
       </ul>
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