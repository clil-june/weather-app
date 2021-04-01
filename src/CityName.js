import React from "react";

export default function CityName(props){
    if (props.name.length< 15){
    return(
        <h1 id="location" style={{'fontSize': '36px'}} >
        {props.name}
      </h1>
    );
    }
    else{
        return(
           <h1 id="location" style={{'fontSize': '32px'}} >
        {props.name}
      </h1> 
        );
    }
}