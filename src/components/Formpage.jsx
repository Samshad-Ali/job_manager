import React, { useContext, useState } from "react";
import Inputfield from "./Inputfield";
import Textareafield from "./Textareafield";
import { jobContext } from "../context/Contextwrapper";

const Formpage = () => {
  const {setData,setIsPreview} = useContext(jobContext);
  const [formdata, setFormdata] = useState({
    title: "",
    intro: "",
    roles: "",
    min: "",
    max: "",
    qualification: "",
    salary: "",
    work: "",
    company: "",
    jobDuration: "",
    jobType: "",
  });
  const changeHandler = (e) => {
    setFormdata({...formdata,[e.target.name]:e.target.value})
  };
  const sumbitHandler=(e)=>{
    e.preventDefault();
    setIsPreview(true)
    setData(formdata);
    
  }
  return (
    <div className="border p-4 w-[40%] rounded-sm">
      <form className="w-full flex flex-col justify-items-center  gap-2">
        <Inputfield
          changeHandler={changeHandler}
          placeholder="Job Post Title"
          isChecked={true}
          name="title"
        />
        <Textareafield
          changeHandler={changeHandler}
          title="Introduction"
          name="intro"
          placeholder="The ideal candidate is someone..."
        />
        <Textareafield
          changeHandler={changeHandler}
          name="roles"
          title="Roles & Responsibilities"
          placeholder="Your job role will include..."
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <input className="checkbox" type="checkbox" checked />
            <p>Experience Range (yrs)</p>
          </div>
          <div className="flex gap-4 items-center">
            <input
              onChange={changeHandler}
              type="number"
              className="bg-transparent border pl-2 p-1 rounded-sm"
              placeholder="Min"
              name="min"
              min={0}
              max={0}
              required
            />
            <input
              onChange={changeHandler}
              type="number"
              className="bg-transparent border pl-2 p-1 rounded-sm"
              placeholder="Max"
              name="max"
              min={0}
              max={20}
              required
            />
          </div>
        </div>
        <Inputfield
          changeHandler={changeHandler}
          placeholder="Qualifications"
          isChecked={true}
          name="qualification"
        />
        <Inputfield
          changeHandler={changeHandler}
          type="number"
          placeholder="Salary Range"
          isChecked={false}
          name="salary"
        />
        <div className="flex gap-4 items-start">
          <input className="checkbox" type="checkbox" checked name="" id="" />
          <textarea
            onChange={changeHandler}
            className="resize-none bg-transparent rounded-sm pl-2 p-1 border w-full"
            name="work"
            placeholder="Call to action Concluding Statement... \n Ex. You will be involved with creating various exciting features such as a chat, real time collaboration, interaction on IOT devices etc. to name a few. If you are interested let's get talking!"
            id=""
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <Inputfield
          changeHandler={changeHandler}
          isChecked={false}
          placeholder="Company"
          name="company"
        />
        <Inputfield
          changeHandler={changeHandler}
          name="location"
          placeholder="Job Location (Map Search)"
          isChecked={true}
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <input className="checkbox" type="checkbox" checked />
            <select
            onChange={changeHandler}
              className="bg-transparent border rounded-sm p-1"
              name="jobDuration"
              required
            >
              <option className="bg-black text-white" value="">Select</option>
              <option className="bg-black text-white" value="Full Time">
                Full Time
              </option>
              <option className="bg-black text-white" value="Part Time">
                Part Time
              </option>
              <option className="bg-black text-white" value="Contract">
                Contract
              </option>
              <option className="bg-black text-white" value="Intership">
                Intership
              </option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <input className="checkbox" type="checkbox" checked />
            <select
            required
            onChange={changeHandler}
              className="bg-transparent border rounded-sm p-1"
              name="jobType"
            >
              <option className="bg-black text-white" value="">Select</option>
              <option className="bg-black text-white" value="Remote">
                Remote
              </option>
              <option className="bg-black text-white" value="5 Day week">
                5 Day week
              </option>
            </select>
          </div>
        </div>
        <button onClick={sumbitHandler} className="bg-green-500 text-white font-bold rounded-sm px-4 p-2 transition-all hover:bg-green-600">Create Job Post</button>
      </form>
    </div>
  );
};

export default Formpage;
