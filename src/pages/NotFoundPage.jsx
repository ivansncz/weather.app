import React from 'react'
//import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const NotFoundPage = props => {
  return (
    <div>
      Not Found
      <Link to ="/main" >ir a main</Link>
    </div>
  )
}

/*NotFoundPage.propTypes = {

}*/

export default NotFoundPage
