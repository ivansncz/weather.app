import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import IconState from '../IconState'
import Grid from '@mui/material/Grid2';

const Weather = ({temperature,state}) => {
  return (
    <Grid container item direction={'row'} justifyItems={"center"} alignItems={"center"} spacing={1}>
       <IconContext.Provider value={{size:"5em"}} >
                 
                 <IconState state={state}></IconState>
                 </IconContext.Provider>
      <Typography variant="h2" display="inline">{temperature}</Typography> 
    </Grid>
  )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    state : PropTypes.string.isRequired
}

export default Weather

