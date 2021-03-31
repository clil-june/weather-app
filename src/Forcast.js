import React from "react";
import Icon from "./Icon";
import "./Forcast.css";

export default function Forcast(props){
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