import React from 'react'
import PropTypes from 'prop-types'
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

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, country, countryCode) => {
      const appid = "35b0b8583b7603b4a920249ad9ca93d9";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

      try {
        const response = await axios.get(url);
        const { data } = response;
        const temperature = data.main.temp;
        const state = data.weather[0].main.toLowerCase();

        const propName = `${city}-${country}`;
        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: { temperature, state },
        }));
      } catch (error) {
        if (error.response) {
          setError("Error en el servidor del clima");
        } else if (error.request) {
          setError("Verifique la conexión a internet");
        } else {
          setError("Error al cargar datos");
        }
      }
    };

    if (cities.length > 0) {
      cities.forEach(({ city, country, countryCode }) => {
        setWeather(city, country, countryCode);
      });
    }
  }, [cities]);

  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;