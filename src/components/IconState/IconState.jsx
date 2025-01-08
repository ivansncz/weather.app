import React from 'react';
import PropTypes from 'prop-types';
import { WiSnow, WiDayCloudy,WiRaindrop, WiDayRain, WiDaySunny,WiThunderstorm } from 'react-icons/wi';

export const validValues = ["clouds", "fog", "clear", "rain","drizzle","thumderstorm"];

const stateByName = {
   
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiDayRain,
  snow : WiSnow,
  drizzle : WiRaindrop,
  thunderstorm:WiThunderstorm
};

const IconState = ({ state }) => {
    const StateByName = stateByName[state] || WiDaySunny; // Valor predeterminado
    return <StateByName />;
};

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
