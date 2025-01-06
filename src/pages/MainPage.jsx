import React from 'react'

import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList'


const cities = [
  {
      city : "Grand Bourg",
      country : "Argentina"
  },{
      city : "Polvorines",
      country : "Argentina"
  },
  {
      city : "San Miguel",
      country : "Argentina"
  }
]

const MainPage = props => {
  const history = useHistory()

  const onClickHandler = ()=>{
    history.push("/")
  }
  
  return (
    <div>
        mainPage
        <CityList cities={cities} onClickCity={onClickHandler}> 
            <h3>Lista de ciudades</h3>
           </CityList>
    </div>
  )
}


export default MainPage
