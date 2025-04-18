import React from 'react'
import './NavBar.css'
import Logo from '../Logo/Logo'
import Navlinks from '../Navlinks/Navlinks'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">LOGO</div> */}
      <Logo logoName={"MOVIE HUB"} src={"https://i.ytimg.com/vi/GV3HUDMQ-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDX0meXWntQams20Wn3jArUnablg"}/>
      <div className='flex gap-5'>
      <ThemeToggler/>
      <Navlinks isNav={true}/>
      </div>
      {/* <NavLinks/> */}
    </nav>
  )
}

export default NavBar