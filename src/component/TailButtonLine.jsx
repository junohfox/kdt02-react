import React from 'react'

export default function TailButtonLine({caption, color, onClick}) {
    const border400 = {
        "blue" : "border-blue-400",
        "orange" : "border-orange-400",
        "lime" : "bg-lime-800"
    }

    const bg200 = {
        "blue" : "border-blue-200",
        "orange" : "border-orange-200",
        "lime" : "bg-lime-200"
    }

    const bgHover = {
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "lime" : "hover:bg-lime-400"
    }
  return (
    <button className={`border ${border400[color]} rounded-md
    text-lg font-bold p-5 m-2
    ${bg200[color]} ${bgHover[color]}
    ${color !== "lime" && "hover:text-white"}
    `} onClick={onClick}>
        {caption}
    </button>
    
  )
}
