import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import searchWhite from '../assets/search-white.svg'
import searchPurple from '../assets/search-purple.svg'

const Search = () => {

  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className={`w-full px-4 py-2 gap-4 flex justify-between items-center border-2 rounded-lg duration-300 ${darkTheme? 'border-light focus-within:shadow-light-dark-cover text-light' : 'border-purple focus-within:shadow-purple-cover text-purple'}`}>
      <input placeholder='Search note...' className={`w-full h-full outline-none bg-transparent ${darkTheme? 'placeholder-light-dark': 'placeholder-purple-text'}`} />
      {
        darkTheme? <img src={searchWhite} alt="search-icon" className='cursor-pointer' /> : <img src={searchPurple} alt="search-icon" className='cursor-pointer' />
      }
    </div>
  )
}

export default Search