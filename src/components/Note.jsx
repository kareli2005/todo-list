import React, { useState } from 'react'
import checkedSVG from '../assets/checked.svg'
import edit from '../assets/edit.svg'
import editActive from '../assets/edit-active.svg'
import trash from '../assets/trash.svg'
import trashActive from '../assets/trash-active.svg'


const Note = ({note, index}) => {

    const [checked, setChecked] = useState(false)
    const editNote = () => {

    }

    const deleteNote = () => {

    }

    return (
        <div className='w-2/3 flex flex-col gap-2 cursor-pointer max-w-[500px] pb-2'>
          {index!== 0 && <div className='w-full border border-purple' />}
          <div className='flex justify-start items-start w-full py-2 gap-4'>
            <div onClick={() => setChecked(!checked)} className='w-full flex gap-4 items-start justify-start'>
                <div className={`border border-purple rounded-sm p-2 ${checked && 'bg-purple'}`}>
                    <img src={checkedSVG} alt='check-icon' className={checked? 'opacity-100' : 'opacity-0'} />
                </div>
                <p className={`w-full text-start font-kanit ${checked && 'text-grey line-through'}`}>{note}</p>
            </div>
            <div className='flex gap-2 justify-center items-center select-none'>
                <div onClick={editNote} className="relative group cursor-pointer w-4 h-4">
                    <img src={edit} alt="edit-icon" className="absolute top-0 left-0 duration-300 group-hover:opacity-0 self-center w-4 h-4" />
                    <img src={editActive} alt="edit-icon" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 self-center w-4 h-4" />
                </div>
                <div onClick={deleteNote} className="relative group cursor-pointer w-4 h-4">
                    <img src={trash} alt="edit-icon" className="absolute top-0 left-0 duration-300 group-hover:opacity-0 self-center" />
                    <img src={trashActive} alt="edit-icon" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 self-center" />
                </div>
            </div>
          </div>
        </div>
    )
}

export default Note