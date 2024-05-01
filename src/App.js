import React from 'react'
import Formpage from './components/Formpage'
import Jobpost from './components/Jobpost'

const App = () => {
  return (
    <div className='w-full p-4 min-h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-xl font-bold'>Job Post Manager App</h1>
      <div className='flex w-full gap-4'>

      <Formpage/>
      <Jobpost/>
      </div>

    </div>
  )
}

export default App