import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div>
      <Typography>Humedad : {humidity}%</Typography>
      <Typography>viento : {wind} km/h</Typography>
    </div>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
