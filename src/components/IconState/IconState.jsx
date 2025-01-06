import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud ,WiDayCloudy,WiDayFog,WiDayRain,WiDaySunny }
from 'react-icons/wi'


export const validValues =["cloud","cloudy","fog","sunny","rain"]

const stateByName = {
   cloud : WiCloud,
   cloudy : WiDayCloudy,
   fog : WiDayFog,
   sunny : WiDaySunny,
   rain : WiDayRain
}


const IconState = ({state}) => {
    const StateByName = stateByName[state]
  return (
    
            <StateByName></StateByName>
        
  )
}

IconState.propTypes = {
    validValues : PropTypes.oneOf(validValues)
}

export default IconState
