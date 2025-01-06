import React from 'react'
import PropTypes, { array } from 'prop-types'
import axios from 'axios'
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import Grid from '@mui/material/Grid2';
import { useState,useEffect } from 'react';


const renderCityAndCountry = eventOnClickCity=>(cityAndCountry,weather) =>{
    const {city,country} = cityAndCountry
    //const {temperature,state} = weather
    return (
      <li key={city} onClick={eventOnClickCity}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
                <CityInfo city={city} country={country}></CityInfo>
            </Grid>
              
            <Grid size={{ xs: 12, md: 4 }}>
                  {weather ? 
                  (<Weather temperature={weather.temperature} state={weather.state} />)
                  :
                  ("no hay datos")}
            </Grid>

          </Grid>
      </li>
  );
};

// ul es tag para listas no ordenadas

const CityList = ({cities, onClickCity}) => {
  const [allWeather,setAllWeather]=useState({})
  useEffect(()=>{
    const setWeather = ({city}) =>{
      const appid = "399581ea85be4e8e894fd8572ddf0ed4"
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
   
    }
    cities.forEach(({city,country}) => {
        setWeather(city)
      });
  
  
  },[cities])
  //const weather = {temperature:10,state:"sunny"}
  return (
    <ul>
        {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                  allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
        }
    </ul>

  )
}

CityList.propTypes = {
    cities : PropTypes.arrayOf(PropTypes.shape({
      city : PropTypes.string.isRequired,
      country : PropTypes.string.isRequired
    }).isRequired),
    onClickCity : PropTypes.func.isRequired
}

export default CityList
