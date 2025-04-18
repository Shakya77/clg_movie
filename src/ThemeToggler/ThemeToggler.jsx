import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

const ThemeToggler = () => {
    const {theme, toggleTheme}= useContext(ThemeContext)
  return (
    <div>
        <button onClick={toggleTheme} >{theme === 'light'?<CiDark size={"30px"}/>:<MdLightMode size={"30px"}/>}</button>
    </div>
  )
}

export default ThemeToggler