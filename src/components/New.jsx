import React from 'react'

const New = ({newNote, setNewNote, darkTheme}) => {

  return (
    <div className={`w-screen h-screen fixed flex justify-center items-center duration-300 ${newNote? 'bg-opacity-50 bg-black z-[100]' : 'opacity-0 pointer-events-none p-4'}`}>
        <div className={`w-full h-full max-w-[500px] max-h-[300px] border border-light rounded-2xl flex flex-col justify-between items-center px-8 py-6 duration-300 ${darkTheme? 'bg-dark' : 'bg-light'} ${newNote? 'scale-100' : 'scale-0'}`}>
            <div className='felx flex-col w-full items-center justify-start text-center text-lg'>
                <p className={darkTheme? 'text-light font-bold w-full': 'text-dark font-bold text-center w-full'}>NEW NOTE</p>
                <input className={`mt-6 hide-scrollbar max-h-[100px] w-full rounded-md bg-transparent border px-2 py-1 outline-none ${darkTheme? ' placeholder-light-dark border-light text-grey' : 'placeholder-purple-text text-purple border-purple'} `} placeholder='Input your note...' type="text" name="" id="" />
            </div>
            <div className='w-full flex justify-between items-center select-none'>
                <button onClick={() => setNewNote(false)} className='bg-transparent border-purple border text-purple rounded-lg px-4 py-2 font-bold duration-300 hover:shadow-purple'>CANCEL</button>
                <button className='bg-purple border-purple border text-light rounded-lg px-4 py-2 font-bold duration-300 hover:shadow-purple'>APPLY</button>
            </div>
        </div>
        <button onClick={() => setNewNote(false)}>close</button>
    </div>
  )
}

export default New