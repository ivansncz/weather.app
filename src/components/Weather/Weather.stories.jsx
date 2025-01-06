import React from "react";
import Weather from "./Weather";

export default{
    title : "Weather",
    component: Weather
}

export const WeatherExample = () => <Weather temperature={10} state={"cloud"}></Weather>
export const WeatherExampleRain = () => <Weather temperature={10} state={"rain"}></Weather>