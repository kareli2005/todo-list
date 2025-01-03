import React, { useEffect, useState } from 'react'
import arrowUp from '../assets/arrow-up.svg'
import arrowDown from '../assets/arrow-down.svg'

const Filter = ({data, setFilteredData}) => {

  const [isClicked, setIsClicked] = useState(false);
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    switch (filter) {
      case 'Complete':
        setFilteredData(data.filter(note => note.done === true))
        break
      case 'Incomplete':
        setFilteredData(data.filter(note => note.done === false))
        break
      case 'All':
        setFilteredData(data)
      default:
        setFilteredData(data)
        break
    }
  }, [filter, data])

  return (
    <div onClick={() => setIsClicked(!isClicked)} className={`relative z-20 pl-2 px-6 sm:px-4 w-auto duration-300 sm:w-40 gap-8 py-2 select-none rounded-lg flex items-center justify-between cursor-pointer text-light font-semibold hover:shadow-purple-cover ${isClicked? 'bg-purple-dark shadow-purple-cover' : 'bg-purple shadow-purple'}`}>
      <p>{filter}</p>
      {isClicked? <img src={arrowUp} alt="arrow-up" /> : <img src={arrowDown} alt="arrow-down" />}
        <ul className={`duration-300 font-normal absolute top-[calc(100%+6px)] w-full left-0 right-0 rounded-lg bg-light text-purple shadow-purple-cover flex-col flex justify-start items-center ${isClicked? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <li onClick={() => setFilter('All')} className='w-full px-2 pt-2 pb-1 font-kanit hover:bg-purple-light-2'>All</li>
          <li onClick={() => setFilter('Complete')} className='w-full px-2 py-1 font-kanit hover:bg-purple-light-2'>Complete</li>
          <li onClick={() => setFilter('Incomplete')} className='w-full px-2 pt-1 pb-2 font-kanit hover:bg-purple-light-2'>Incomplete</li>
        </ul>
    </div>
  )
}

export default Filter