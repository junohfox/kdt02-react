import React from 'react'
import TailButton from '../component/TailButton'
import TailButtonLine from '../component/TailButtonLine';

export default function TrafficNav({title, ct, selc, setSelC}) {
    console.log("TrafficNav", ct)

    const tags = ct.map(item => <TailButton
                            key ={item}
                            caption={item}
                            color={ item == selc ? "orange" : "blue"}
                            onHandle ={()=> setSelC(item)
                            }

        
    />);
  return (
    <div className='w9/10 flex justify-between items-center my-5'>
        <div className='text-2xl font-bold'>
            교통사고{title}
        </div>

        <div>
            {tags}
        </div>
    </div>
  )
}
