import React from "react"
import Forecast from "./ForecastItem"

export default{
    title : "Forecast",
    component : Forecast
}

export const LunesSoleado  = ()=> <Forecast weekDay={"Lunes"} hour={10} state={"sunny"} temperature={23} ></Forecast>