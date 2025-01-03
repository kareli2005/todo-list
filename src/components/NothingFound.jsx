import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import notFound from '../assets/not-found.svg'
import notFoundDark from '../assets/not-found-dark.svg'

const NothingFound = () => {

	const {darkTheme} = useContext(ThemeContext)


  return (
    <div className='w-full max-w-[700px] flex flex-col gap-4 justify-center items-center'>
        <img src={darkTheme? notFoundDark : notFound}  alt='not-found' />
				<p>Empty...</p>
    </div>
  )
}

export default NothingFound