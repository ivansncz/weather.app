import React from "react"
import {render , screen} from '@testing-library/react'
import WeatherDetails from "./WeatherDetails"
 




test('WeatherDetails Render', async () => {
    render(<WeatherDetails humidity={80} wind={10}/>);
  
    const humidity = await screen.findByText(/Humedad : 80%/);
    const wind = await screen.findByText(/viento : 10 km\/h/);
  
    expect(humidity).toHaveTextContent('Humedad : 80%');
    expect(wind).toHaveTextContent('viento : 10 km/h');
  });