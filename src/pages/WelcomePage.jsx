import React from 'react'
import Grid from "@mui/material/Grid2"
//import PropTypes from 'prop-types'

import WelcomeScreen from './../components/WelcomeScreen'
import { IconContext } from 'react-icons'
import { WiDayCloudy } from 'react-icons/wi'
import { Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import {Link} from '@mui/material'


const WelcomePage = props => {
  return (<WelcomeScreen>
    <Grid container direction="column" justifyContent="center" className="full">
            <div className="highlight">
              <Grid item container xs = {12} justifyContent = "center" alignItems="center">
                  <IconContext.Provider value = {{size:"6em"}}>
                    <WiDayCloudy></WiDayCloudy>
                  </IconContext.Provider>
              </Grid> 
              <Grid item container justify = "center" alignItems="center" direction="column">
                <Typography variant='h4' color='inherit'>
                      Weather App
                </Typography>
                <Link color='inherit' aria-label='menu'component={RouterLink} to="/main" >
                Ingresar
                </Link>
              </Grid>
            </div>
    </Grid>
    </WelcomeScreen>    

  )
}

/*WelcomePage.propTypes = {

}*/

export default WelcomePage
