import React,{useState} from "react";

export default function Temperature (props){
    const[unit, setUnit]=useState("celsius");

    function displayFahr (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function displayCels(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius"){
    return(
        <h2>
      <span id="temperature">{Math.round(props.celsius)}</span>
       <small className="unit"><span id="celsius">°C</span> |<a href="/" onClick={displayFahr} id="fahrenheit"> °F</a></small>
      </h2>
    );
    }
    else{
        let fahr = (props.celsius*9/5)+32;
        return(
            <h2>
      <span id="temperature">{Math.round(fahr)}</span>
       <small className="unit"><a href="/" onClick={displayCels} id="celsius">°C</a> |<span id="fahrenheit"> °F</span></small>
      </h2>
        );
    }
}