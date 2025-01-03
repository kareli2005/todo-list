import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import undo from '../assets/undo.svg'

const Undo = ({ cancelDelete }) => {
  return (
    <div
      onClick={cancelDelete}
      className="flex justify-center items-center gap-4 rounded-lg bg-purple-dark shadow-purple-light-cover h-[38px] my-2 cursor-pointer p-2 hover:bg-purple hover:shadow-purple duration-300"
    >
      <CountdownCircleTimer
        trailColor="transparent"
        strokeWidth={2}
        size={25}
        isPlaying={true}
        duration={3}
        colors={["rgba(247, 247, 247, 1)"]}
        onComplete={() => {
          return { shouldRepeat: false }
        }}
      >
        {({ remainingTime }) => <div className="text-light">{remainingTime}</div>}
      </CountdownCircleTimer>
      <div className="w-full flex justify-end items-center gap-2 select-none text-light">
        <p>UNDO</p>
        <img src={undo} alt="undo.svg" />
      </div>
    </div>
  )
}

export default Undo
