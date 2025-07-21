import { useState } from 'react';
import React from 'react'

export default function MyListItem({title, imgUrl, content}) {
    //state 변수
    const [cnt=0, setCnt] = useState(0);
    
    
    const handleUp = () => {
        setCnt(cnt+1);
        
        console.log(title, cnt);
    }

    const handleDown =() => {
        if(cnt-1 < 0) return;
        setCnt(cnt-1);
    }
  return (
    <div className='w-full h-50 flex justify-start items-start
            border rounded-xl overflow-hidden border-gray-400'>
        <div className='w-1/4 h-full flex items-start justify-start'>
            <img src={imgUrl}/>

        </div>
        <div className='w-3/4 h-full flex flex-col p-5 justify-between items-start'>
        <div className='w-full flex flex-col justify-start items-start'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='w-full flex justify-start items-start'>{content}</p>
        </div>
        <div className='w-full h-4 flex justify-end items-center'>
            <span className='mx-4 cursor-pointer hover:text-red-500'
            onClick={handleUp}>🧡좋아요</span>
            <span className='text-2xl font-bold'>{cnt}</span>
            <span  className='mx-4 cursor-pointer hover:text-red-500'
            onClick={handleDown}>😫싫어요</span>
            <span className='text-2xl font-bold'>{cnt}</span>
        </div>


        </div>

    </div>
    
  )
}
