import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

const ThemeButton = () => {

  const {darkTheme, toggleTheme} = useContext(ThemeContext)

  return (
    <div  onClick={toggleTheme} className='group w-10 h-10 bg-purple hover:bg-purple-dark duration-300 hover:shadow-purple p-2 flex justify-center items-center aspect-square rounded-lg cursor-pointer'>
      {darkTheme? <img src={sun} alt='sun-icon' className='group-hover:rotate-45 duration-300' /> : <img src={moon} alt='moon-icon' className='group-hover:rotate-45 duration-300' /> }
    </div>
  )
}

export default ThemeButton