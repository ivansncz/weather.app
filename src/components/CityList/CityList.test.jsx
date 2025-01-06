import React from "react";
import CityList from './CityList'
import {render,screen} from '@testing-library/react'
import { fireEvent } from "@testing-library/react";



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


test("CityListTest", async () => {

    const {findAllByRole} = render(<CityList cities={cities}></CityList>)

    const items = await screen.findAllByRole("listitem")

    expect(items).toHaveLength(3)


})


test("CityListClickOnItem",async ()=>{

    const fnClickOnItem = jest.fn ()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} ></CityList>)

    const items = await screen.findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})