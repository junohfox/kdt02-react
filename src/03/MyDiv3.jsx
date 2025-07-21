import React from 'react'
import { VscChevronRight } from "react-icons/vsc";

export default function MyDiv3({d1,d2,d3}) {
  return (
    <div className='w-9/10 h-4/5 bg-amber-500
    
                flex-col justify-start text-white font-bold p-10 text-2xl'>
        <div className='flex'>
        {d1} <VscChevronRight /> {d2} <VscChevronRight /> {d3}
        </div>
        </div>
  )
}
