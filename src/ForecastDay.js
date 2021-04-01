import React from "react";
import Icon from "./Icon";

export default function ForecastDay (props){
    let tempMax = props.data.temp.max;
    let tempMin = props.data.temp.min;

    function day (){
        let date = new Date(props.data.dt* 1000);
        let day = date.getDay();
        let days= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        return days[day];
    }

    return(
        <div className="forecast-day">
        {day()} <br />
<Icon code={props.data.weather[0].icon} size={30}/>
        {Math.round(tempMax)}° / {Math.round(tempMin)}° 
        </div>
    );
}