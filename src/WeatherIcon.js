import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiShowers } from "weather-icons-react";
import { WiNightLightning } from "weather-icons-react";
import { WiSnowflakeCold } from "weather-icons-react";
import { WiFog } from "weather-icons-react";

export default function WeatherIcon(props){
    const codeMapping={
        "01d": <WiDaySunny size={75} color='#5199d7' />,
        "01n": <WiNightClear size={75} color='#5199d7' />,
        "02d": <WiDayCloudy size={75} color='#5199d7' />,
        "02n": <WiNightAltCloudy size={75} color='#5199d7' />,
        "03d": <WiCloud size={75} color='#5199d7' />,
        "03n": <WiCloud size={75} color='#5199d7' />,
        "04d": <WiCloudy size={75} color='#5199d7' />,
        "04n": <WiCloudy size={75} color='#5199d7' />,
        "09d": <WiShowers size={75} color='#5199d7' />,
        "09n": <WiShowers size={75} color='#5199d7' />,
        "10d": <WiShowers size={75} color='#5199d7' />,
        "10n": <WiShowers size={75} color='#5199d7' />,
        "11d": <WiNightLightning size={75} color='#5199d7' />,
        "11n": <WiNightLightning size={75} color='#5199d7' />,
        "13d": <WiSnowflakeCold size={75} color='#5199d7' />,
        "13n": <WiSnowflakeCold size={75} color='#5199d7' />,
        "50d": <WiFog size={75} color='#5199d7' />,
        "50n": <WiFog size={75} color='#5199d7' />,
    }
return ( <div> {codeMapping[props.code]} </div>);
}