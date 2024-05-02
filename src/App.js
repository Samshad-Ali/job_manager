import React, { useContext, useState } from 'react'
import Formpage from './components/Formpage'
import Jobpost from './components/Jobpost'
import { jobContext } from './context/Contextwrapper';

const App = () => {
  const [isOpen,setIsopen] = useState(false);
  const {isPreview} = useContext(jobContext);
  const handleToggleBtn=()=>{
    setIsopen(!isOpen)
  }
  return (
    <div className='w-full p-4 min-h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-xl font-bold'>Job Post Manager App</h1>
      <div className='flex w-full gap-4'>

      <Formpage/>
      {
        isPreview &&
      <button 
      onClick={handleToggleBtn}
      className='bg-white text-black px-4 p-2 rounded-sm w-fit h-fit font-semibold'>Live preview</button>
      }
      {
        isOpen && <Jobpost/>
      }
      </div>

    </div>
  )
}

export default App