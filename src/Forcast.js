import React from "react";
import axios from "axios";
import Icon from "./Icon";
import "./Forcast.css";

export default function Forcast(props){
function handleResponse(response){
    console.log(response.data);
}

    let apiKey = "691e6f287f8a1dd47bdf252b202e00d0";
    let lon= props.coords.lon
    let lat= props.coords.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`

    axios.get(`${apiUrl}&appid${apiKey}`).then(handleResponse);

    return(
        <div>
        <ul class="forcast">
    <li className="forcast-list">
        Thu <br />
<Icon code="01d" size={20}/>
        15 / 6 
    </li>
       </ul>
    </div>
    );
}