import React, { useEffect, useState, useRef } from 'react'
import checkedSVG from '../assets/checked.svg'
import edit from '../assets/edit.svg'
import editActive from '../assets/edit-active.svg'
import trash from '../assets/trash.svg'
import trashActive from '../assets/trash-active.svg'
import Note from '../utils/Note'
import Edit from './Edit'
import Undo from './Undo'

const NoteComp = ({ noteData, index, updateNotes }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showUndo, setShowUndo] = useState(false)
  const timeoutRef = useRef(null)

  const editNote = (e) => {
    e.stopPropagation()
    setShowEdit(true)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    setShowUndo(true)

    timeoutRef.current = setTimeout(() => {
      Note.deleteNote(noteData.id)
      setShowUndo(false)
      updateNotes()
    }, 3000)
  }

  const cancelDelete = () => {
    clearTimeout(timeoutRef.current)
    setShowUndo(false)
  }

  const handleCheck = () => {
    Note.checkNote(noteData.id)
    updateNotes()
  }

  return (
    <>
      <Edit showEdit={showEdit} setShowEdit={setShowEdit} updateNotes={updateNotes} noteData={noteData} />
      {showUndo ? (
        <>
          <Undo cancelDelete={cancelDelete} />
          {index !== 0 && <div className='max-w-2/3 border border-purple' />}
        </>
      ) : (
        <div onClick={handleCheck} className='w-2/3 flex flex-col cursor-default max-w-[500px] gap-2 py-2'>
          {index !== 0 && <div className='w-full border border-purple' />}
          <div className='flex justify-start items-start w-full py-2 gap-4'>
            <div className='w-full flex gap-4 items-start justify-start'>
              <div className={`border border-purple rounded-sm p-2 cursor-pointer ${noteData.done && 'bg-purple'}`}>
                <img src={checkedSVG} alt='check-icon' className={noteData.done ? 'opacity-100' : 'opacity-0'} />
              </div>
              <p className={`w-full text-start font-kanit ${noteData.done && 'text-grey line-through'}`}>{noteData.text}</p>
            </div>
            <div className='flex gap-2 justify-center items-center select-none'>
              <div onClick={(e) => editNote(e)} className="relative group cursor-pointer w-4 h-4 z-10">
                <img src={edit} alt="edit-icon" className="absolute top-0 left-0 duration-300 group-hover:opacity-0 self-center w-4 h-4" />
                <img src={editActive} alt="edit-icon" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 self-center w-4 h-4" />
              </div>
              <div onClick={(e) => handleDelete(e)} className="relative group cursor-pointer w-4 h-4 z-10">
                <img src={trash} alt="edit-icon" className="absolute top-0 left-0 duration-300 group-hover:opacity-0 self-center" />
                <img src={trashActive} alt="edit-icon" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 self-center" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NoteComp
