import React, { useContext, useEffect, useState, useRef } from 'react'
import Note from '../utils/Note'
import { ThemeContext } from '../context/ThemeContext'

const New = ({showNew, setShowNew, updateNotes}) => {

  const [noteText, setNoteText] = useState('')
  const [error, setError] = useState('')

  const inputRef = useRef(null)

  const {darkTheme} = useContext(ThemeContext)

  useEffect(() => {
    if (showNew && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showNew])

  const apply = () => {
    if (noteText.trim().length == 0) {
      return setError('Enter text!')
    }
    const newNote = new Note(noteText)
    if (newNote.saveNote()) {
      setNoteText('')
      setShowNew(false)
      updateNotes()
    } else {
      setError('Invalid Parameters!')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      apply()
    }
  }

  return (
    <div className={`w-screen h-screen fixed flex justify-center items-center duration-300 p-4 ${showNew? 'bg-opacity-50 bg-black z-[100]' : 'opacity-0 pointer-events-none'}`}>
        <div className={`w-full h-full max-w-[500px] max-h-[300px] border border-light rounded-2xl flex flex-col justify-between items-center px-8 py-6 duration-300 ${darkTheme? 'bg-dark' : 'bg-light'} ${showNew? 'scale-100' : 'scale-0'}`}>
            <div className='felx flex-col w-full items-center justify-start text-center text-lg'>
                <p className={darkTheme? 'text-light font-bold w-full': 'text-dark font-bold text-center w-full'}>NEW NOTE</p>
                <input ref={inputRef} value={noteText} onChange={(e) => setNoteText(e.target.value)} onKeyDown={handleKeyDown} className={`mt-6 hide-scrollbar max-h-[100px] w-full rounded-md bg-transparent border px-2 py-1 outline-none ${darkTheme? ' placeholder-light-dark border-light text-grey' : 'placeholder-purple-text text-purple border-purple'} `} placeholder='Input your note...' type="text" name="" id="" />
                {error && <p className='text-red-600 text-base font-semibold p-2'>{error}</p>}
            </div>
            <div className='w-full flex justify-between items-center select-none'>
                <button onClick={() => setShowNew(false)} className='bg-transparent border-purple border text-purple rounded-lg px-4 py-2 font-bold duration-300 hover:shadow-purple'>CANCEL</button>
                <button onClick={apply} className='bg-purple border-purple border text-light rounded-lg px-4 py-2 font-bold duration-300 hover:shadow-purple'>APPLY</button>
            </div>
        </div>
    </div>
  )
}

export default New