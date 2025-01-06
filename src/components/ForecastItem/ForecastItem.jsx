import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IconContext } from 'react-icons';
import IconState from './../IconState';

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid size={2}>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid size={2}>
        <Typography>{hour}:00</Typography>
      </Grid>
      <Grid size={2}>
        <IconContext.Provider value={{ size: "5em" }}>
          <IconState state={state} />
        </IconContext.Provider>
      </Grid>
      <Grid size={2}>
        <Typography>{temperature}°</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['sunny', 'cloud', 'rain', 'snow']).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
