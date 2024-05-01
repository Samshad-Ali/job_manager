import React from 'react'

const Textareafield = ({title,placeholder}) => {
  return (
    <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 ">
            <input className="checkbox" type="checkbox" checked />
            <p className="underline">{title}</p>
          </div>
          <textarea
            cols="30"
            rows="2"
            placeholder={placeholder}
            className="resize-none bg-transparent border pl-2 p-1 rounded-sm"
          ></textarea>
        </div>
  )
}

export default Textareafield