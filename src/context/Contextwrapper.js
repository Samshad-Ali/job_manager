import React, { createContext, useState } from 'react'
export const jobContext = createContext();
const Contextwrapper = ({children}) => {
    const [data,setData] = useState([]);
    const [isPreview,setIsPreview] = useState(false);
  return (
    <jobContext.Provider 
    value={{data,setData,isPreview,setIsPreview}}
    >
        {children}
    </jobContext.Provider>
  )
}

export default Contextwrapper