import React from 'react'
import './Navlinks.css'
import { Link } from 'react-router-dom'

const Navlinks = ({isNav}) => {
  return (
    <div className={isNav ? "navlinks": "footerlinks"}>  
    <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/trending'}>Trending</Link></li>
          <li><a href="#">Categories</a></li>
          <li><a href='#'>Contact Us</a></li>
    </ul>
    </div>
  )
}

export default Navlinks