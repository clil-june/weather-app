import React from "react";
import "./Forcast.css";

export default function Forcast(){
    return(
        <div>
        <ul class="forcast">
    <li className="forcast-list">
        Thu <br />
        15 6 <br />
        ☀
    </li>
    <li className="forcast-list">
        Fri
        <br />
        -1°C
        <br />
        ❄
    </li>
    <li className="forcast-list">
        Sat<br />
        8°C<br />
        🌧
    </li>
    <li className="forcast-list">
        Sun
        <br />
        10°C
        <br />
        ☀
    </li>
    <li className="forcast-list">
        Mon
        <br />
        9°C
        <br />
        🌤
    </li>
    </ul>
    </div>
    );
}