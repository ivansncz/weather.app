import React from "react";
import Weather from './Weather'
import {render,screen} from '@testing-library/react'


test ("Weather render", async () => {

    const {findByRole} = render (<Weather temperature ={10} state={"cloud"}></Weather>)

    const temp = await screen.findByRole("heading")
    
    expect (temp).toHaveTextContent("10")

})