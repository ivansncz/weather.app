import React from "react";
import Forecast from "./Forecast"

const forecastItemList = [
    {weekDay : "monday" , hour : 5, state : "sunny", temperature : 33},
    {weekDay : "tuesday", hour : 12, state : "fog", temperature : 18},
    {weekDay :"saturday" , hour : 11, state : "cloudy", temperature : 20},
    {weekDay : "wednesday", hour :13 , state : "rain", temperature :12 } 
]


export default{
    title : "Forecast",
    component : Forecast
}

export const ForecastExample= ()=> <Forecast forecastItemList={forecastItemList}></Forecast>