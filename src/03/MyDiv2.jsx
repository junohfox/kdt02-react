import React from 'react'
import MyDiv3 from './MyDiv3'
import { SlArrowRight } from "react-icons/sl";
import { VscChevronRight } from "react-icons/vsc";


export default function MyDiv2(props) {
  return (
    <div className='w-4/5 h-4/5 bg-amber-700
    
                flex flex-col items-center text-white font-bold p-10 text-2xl'>
                    <div className='w-9/10 flex justify-start mb-5'>
                    
                   
                    {props.a} <VscChevronRight /> {props.b}
                    
                    </div>
                    
                    <MyDiv3 d1={props.a} d2={props.b} d3={props.c} />
                    
                    </div>
  )
}
