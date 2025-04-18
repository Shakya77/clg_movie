import React from 'react'
import { useState } from 'react'

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode]= useState(false)
  return (
    <div style={{background: isDarkMode ? "gray": "white" , color: isDarkMode?"white":"black", padding:"50px"} }>
        <p>This Theme is :</p>
        <button onClick={()=>setIsDarkMode(!isDarkMode)}> Toggle</button>
    </div>
  )
}

export default ToggleTheme