import React,{useState} from "react";
import axios from "axios";
import WeatherContent from "./WeatherContent";
import "./Content.css";

export default function Contents (props){
  const[content, setContent]=useState({ready: false});
  const[city, setCity]=useState(props.defaultCity)


function handleResponse (response) {
setContent({
  ready: true,
  name: response.data.name,
  temperature:response.data.main.temp,
  description:response.data.weather[0].description,
  icon: response.data.weather[0].icon,
  wind:response.data.wind.speed,
  humidity:response.data.main.humidity
});
}

function search(){
let apiKey = "691e6f287f8a1dd47bdf252b202e00d0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
axios.get(`${apiUrl}&appid${apiKey}`).then(handleResponse);
}

function handleSearch(event){
  event.preventDefault();
  setCity(event.target.value);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}


if(content.ready){
    return (
        <div className="content">
      <form autoComplete="off" id="search-form" onSubmit={handleSubmit} >
      <input id="search-bar" type="search" placeholder="Enter city" onChange={handleSearch} />
      <input id="search" type="submit" value="search" />
     </form> 

     <button id="your-location">
        <i className="fas fa-map-marker-alt"></i>
      </button>

      <WeatherContent data={content}/>
</div>
    );
}
else{
  search();
  return "Coming Soon..."
}
}