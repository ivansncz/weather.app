import React from "react";
import CityList from "./CityList";
import {action} from '@storybook/addon-actions'

const cities = [
    {
        city : "Grand Bourg",
        country : "Argentina"
    },{
        city : "Polvorines",
        country : "Argentina"
    },
    {
        city : "San Miguel",
        country : "Argentina"
    }
]

export default{
    title :"CityList" ,
    component : CityList
}

export const CityListExample = () =>   <CityList cities={cities} onClickCity={action("Click en City")}>

</CityList>
