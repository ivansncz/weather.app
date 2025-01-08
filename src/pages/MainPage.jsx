import React from 'react'

import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList'


const cities = [
  {
      city : "Buenos Aires",
      country : "Argentina",
      countryCode : "AR"
  },{
      city : "Bogota",
      country : "Colombia",
      countryCode : "CO"

  },
  {
      city : "Madrid",
      country : "España",
      countryCode : "ES"
  }
]

const MainPage = props => {
  const history = useHistory()

  const onClickHandler = ()=>{
    history.push("/")
  }
  
  return (
    <div>
        <CityList cities={cities} onClickCity={onClickHandler}> 
            <h3>Lista de ciudades</h3>
           </CityList>
    </div>
  )
}


export default MainPage
