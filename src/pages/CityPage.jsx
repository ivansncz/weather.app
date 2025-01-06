import React from 'react'
//import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid2'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast/Forecast'

const dataExample = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]


const citiesExample = [
  { weekDay: "monday", hour: 5, state: "sunny", temperature: 33 },
  { weekDay: "tuesday", hour: 12, state: "fog", temperature: 18 },
  { weekDay: "saturday", hour: 11, state: "cloudy", temperature: 20 },
  { weekDay: "wednesday", hour: 13, state: "rain", temperature: 12 }
]

const CityPage = props => {
  const city ="Grand Bourg"
  const country="Argentina"
  const state= "sunny"
  const temperature="25"
  const humidity="41"
  const wind="10"
  const data = dataExample
  const forecastItemList=citiesExample


  return (
    <Grid container justifyContent = "center" direction="column" spacing={3}>
        <Grid container xs={12} justifyContent="center" alignItems="flex-end">
            <CityInfo city={city} country={country}></CityInfo>
        </Grid>
        <Grid container
            size={{xs:12}}
            justifyContent="center">
          <Weather state={state} temperature={temperature}></Weather>
          <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
        </Grid>
        <Grid item>
          <ForecastChart data={data}></ForecastChart>
        </Grid>
        <Grid>
          <Forecast forecastItemList={forecastItemList}></Forecast>
        </Grid>
       
    </Grid>
   
  )
}

/*CityPage.propTypes = {

}*/

export default CityPage
