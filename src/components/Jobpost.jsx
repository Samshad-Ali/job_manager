import React, { useContext } from 'react'
import { jobContext } from '../context/Contextwrapper'

const Jobpost = () => {
    const {data} = useContext(jobContext);
    console.log(data)
  return (
    <div className='w-[40%] border p-4 rounded-sm flex flex-col gap-4'>
        <p>{data?.title}</p>
        <div>
            <p>Introduction : </p>
        <p>{data?.intro}</p>
        </div>
        <div>
            <p>Role & Responsibilities : </p>
            <p>{data?.roles}</p>
        </div>
        <div>
            <p>Preferred Experience : {data?.min} to {data?.max} yrs</p>
        </div>
        <div>
            <p>Qualifications : </p>
            <p>{data?.qualification} </p>
        </div>
       <p>Concluding Statement : {data?.work}</p>
        <p>Location : {data?.location}</p>
        <p>Job Type : {data?.jobType}, {data?.jobDuration}</p>
    </div>
  )
}

export default Jobpost