import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid2'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { WiCloud ,WiDayCloudy,WiDayFog,WiDayRain,WiDaySunny }
from 'react-icons/wi'
import { Typography } from '@mui/material'


const AppFrame = ({children}) => {
  return (
    <Grid container justifyContent="center">
        <AppBar position='static'>
          <ToolBar variant='dense'>
            <IconButton color='inherit' aria-label='menu'>
                <Link component={RouterLink} to= '/main' color='inherit' aria-label='menu'>
                    <IconContext.Provider value={{size:"5em"}} >
                       <WiCloud></WiCloud>  
                    </IconContext.Provider>
                </Link>
            </IconButton>
              <Typography variant='h6' color='inherit'>Weather App</Typography>
          </ToolBar>
        </AppBar>
        <Grid container item 
          xs={12}
          sm={11}
          md={10}
          lg={8}>
          {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {

}

export default AppFrame
