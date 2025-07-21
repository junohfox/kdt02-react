import React, { useState } from 'react'
import TailButtonLine from '../component/TailButtonLine'

export default function MyToggleBox({color}) {
  const[isShow, setIsShow] = useState(false);

  const bg1 ={
      "blue" : "bg-blue-700",
      "orange" : "bg-orange-700",
      "lime" : "bg-lime-700"

  }

  const handleShow = () => {
    setIsShow(!isShow);
  }


  return (
    <div className={`w-full flex flex-col justify-center items-center
    ${isShow && bg1[color]} p-5`}>
      <div className={`font-bold text-2xl ${isShow ? "text-white" : "text-black"} mb-10`}>

      <TailButtonLine caption={color}
        color = "lime"
        onClick={()=>{}}/>

      <TailButtonLine 
        caption={`${color} Toggle`}
        color = {color}
        onClick={handleShow}/>
    </div>

    </div>

  )
}
