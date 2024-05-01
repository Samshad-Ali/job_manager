import React from "react";
import Inputfield from "./Inputfield";
import Textareafield from "./Textareafield";

const Formpage = () => {
  return (
    <div className="border p-4 w-[50%] rounded-sm">
      <form className="w-full flex flex-col justify-items-center  gap-2">
        <Inputfield
          placeholder="Job Post Title"
          isChecked={true}
          name="title"
        />
        <Textareafield
          title="Introduction"
          placeholder="The ideal candidate is someone..."
        />
        <Textareafield
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
              type="number"
              className="bg-transparent border pl-2 p-1 rounded-sm"
              placeholder="Min"
              min={0}
              max={0}
            />
            <input
              type="number"
              className="bg-transparent border pl-2 p-1 rounded-sm"
              placeholder="Max"
              min={0}
              max={20}
            />
          </div>
        </div>
        <Inputfield
          placeholder="Qualifications"
          isChecked={true}
          name="qualification"
        />
        <Inputfield
          type="number"
          placeholder="Salary Range"
          isChecked={false}
          name="salary"
        />
        <div className="flex gap-4 items-start">
          <input className="checkbox" type="checkbox" checked name="" id="" />
          <textarea
            className="resize-none bg-transparent rounded-sm pl-2 p-1 border w-full"
            name=""
            placeholder="Call to action Concluding Statement... \n Ex. You will be involved with creating various exciting features such as a chat, real time collaboration, interaction on IOT devices etc. to name a few. If you are interested let's get talking!"
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <Inputfield isChecked={false} placeholder="Company" name="company" />
        <Inputfield
          name="location"
          placeholder="Job Location (Map Search)"
          isChecked={true}
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <input className="checkbox" type="checkbox" checked />
            <select
              className="bg-transparent border rounded-sm p-1"
              name="job-duration"
            >
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
              className="bg-transparent border rounded-sm p-1"
              name="job-type"
            >
              <option className="bg-black text-white" value="Remote">
                Remote
              </option>
              <option className="bg-black text-white" value="5 Day week">
                5 Day week
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formpage;
