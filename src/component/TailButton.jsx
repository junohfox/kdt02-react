import React from 'react'

export default function TailButton({caption, color, onHandle}) {
    const bg = {
        "blue" : "bg-blue-800",
        "orange" : "bg-orange-800",
        "lime" : "bg-lime-800"
    }

    const bgHover = {
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-lime-400"
    }
  return (
    <button className={`mx-4 p-4 hover:cursor-pointer hover:font-bold
            rounded-2xl text-white ${bg[color]} ${bgHover[color]}`}
            onClick={onHandle}>
        {caption}
    </button>
    
  )
}
