import React from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Grid from '@mui/material/Grid2';
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
const App = props => {
  return (
    <div>
        <Grid container justifyContent={"center"} direction={"row"}>   
            <Grid size ={{sm :10}}>
                <Router>
                    <Switch>
                        <Route path = "/main"> <MainPage>
                            </MainPage>
                        </Route>
                        <Route path = "/city">
                            <CityPage></CityPage>
                        </Route>
                        <Route exact path = "/"> 
                            <WelcomePage></WelcomePage>
                        </Route>
                        <Route> 
                            <NotFoundPage></NotFoundPage>
                        </Route>
                    </Switch>
                </Router>
            </Grid>
        </Grid>     
    </div>
  )
}
/*
App.propTypes = {

}*/

export default App
