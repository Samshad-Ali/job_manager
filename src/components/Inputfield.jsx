import React from "react";

const Inputfield = ({placeholder,name,type='text',isChecked,changeHandler}) => {
  return (
    <div className="flex gap-4 items-center w-full">
      <input className="checkbox" type="checkbox" checked={isChecked} />
      <input
      required
      onChange={changeHandler}
      className="rounded-sm w-full outline-none border bg-transparent pl-2 p-1" type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Inputfield;
