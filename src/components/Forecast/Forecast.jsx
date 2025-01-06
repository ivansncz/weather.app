import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';
import ForecastItem from './../ForecastItem';
import { validValues } from './../IconState';

const renderForecastitem = (forecastItem) => { // Recibe directamente el objeto
  const { weekDay, hour, state, temperature } = forecastItem;
  return (
    <Grid key={`${weekDay}${hour}`}>
      <ForecastItem
        weekDay={weekDay}
        hour={hour}
        state={state}
        temperature={temperature}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"}>
      {forecastItemList.map(renderForecastitem)} {/* Pasa directamente cada item */}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      validValues : PropTypes.oneOf(validValues).isRequired
    })
  ).isRequired,
};

export default Forecast;
