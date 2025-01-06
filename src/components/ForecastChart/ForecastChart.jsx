import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line,CartesianGrid,XAxis,YAxis,ResponsiveContainer } from 'recharts'

  
const ForecastChart = ({data}) => {
  return (
    <ResponsiveContainer height={250} width={"95%"}>
       <LineChart 
        margin={{top:20,bottom:20,left:5,right:5}}
        data ={data}
         
       >
        <XAxis></XAxis>
        <YAxis></YAxis>
        <CartesianGrid> </CartesianGrid>
        <Line type ="monotone" dataKey="max" stroke="#FF0000">

        </Line>
        <Line type ="monotone" dataKey="min" stroke="#0000FF">

        </Line>
       </LineChart>
   </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {

}

export default ForecastChart
