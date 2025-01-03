import React, { useContext, useState, useRef, useEffect  } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Search from './components/Search'
import Filter from './components/Filter'
import ThemeButton from './components/ThemeButton'
import NoteComp from './components/NoteComp'
import plus from './assets/plus.svg'
import New from './components/New'
import './styles/Scrollbar.css'
import Note from './utils/Note'
import NothingFound from './components/NothingFound'

const App = () => {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [showNew, setShowNew] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)

  const {darkTheme} = useContext(ThemeContext)
  const containerRef = useRef(null)

  useEffect(() => {
    updateNotes()
  }, [])
  
  useEffect(() => {
    const checkScroll = () => {
      const container = containerRef.current
      if (container) {
        setIsScrollable(container.scrollHeight > container.clientHeight)
      }
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)

    return () => window.removeEventListener('resize', checkScroll)
  }, [data])

  const updateNotes = () => {
    const notes = Note.getNotes()
    setData(notes)
  }

  return (
    <div className={`w-full h-screen flex justify-center items-center duration-300 overflow-hidden ${darkTheme? 'bg-dark text-light' : 'bg-light text-dark'} p-2`}>
      <New showNew={showNew} setShowNew={setShowNew} updateNotes={updateNotes} />

      <div className="w-full h-full flex justify-start items-center flex-col">
        <div className="w-full text-3xl font-bold text-center py-10">
          <h1>TODO LIST</h1>
        </div>
        <div className="gap-4 flex w-full max-w-[750px] relative flex-col sm:flex-row">
          <Search setFilteredData={setFilteredData} data={data} filteredData={filteredData} />
          <div className='w-full flex justify-between duration-300 sm:w-auto gap-4'>
            <Filter setFilteredData={setFilteredData} data={data} />
            <ThemeButton />
          </div>
        </div>
        <div ref={containerRef} className={`h-auto hide-scrollbar overflow-y-auto flex flex-col justify-start items-center my-10 ${isScrollable ? 'ml-4 w-[calc(100%-16px)]' : 'w-screen'}`}>
          {
            filteredData.length > 0 ?
              filteredData.map((noteData, index) => (
                <NoteComp noteData={noteData} index={index} key={noteData.id} updateNotes={updateNotes} />
              ))
                :
              <NothingFound />
          }
        </div>
        <div className='fixed bottom-0 transparent max-w-[750px] w-full flex items-center justify-end pb-10'>
          <div onClick={() => setShowNew(true)} className='bg-purple select-none rounded-full cursor-pointer hover:rotate-90 duration-300 shadow-purple hover:bg-purple-dark border-2 border-purple mr-2'>
            <img src={plus} alt='plus-icon' className='p-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App