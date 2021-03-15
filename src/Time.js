import React from "react";
import "./Time.css";

export default function Time (){
    let now = new Date();
let days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
let day = days[now.getDay()];
let hour=now.getHours();
let minute = now.getMinutes();


  if (minute < 10){
    return(
 <h3 className="time"> {day}, {hour}:0{minute} </h3>);
}
else{
  return(
<h3 classname="time">{day}, {hour}:{minute}</h3>);
}
}