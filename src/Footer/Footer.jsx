import React from 'react'
import './Footer.css'
import Navlinks from '../Navlinks/Navlinks'

const Footer = () => {
  return (
<footer className="footer">
<p> &copy; copyright ...</p>
<div> 
<Navlinks isNav={false}/>
</div>
</footer>
  )
}

export default Footer