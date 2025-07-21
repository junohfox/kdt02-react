import React from 'react'

export default function Tailball({n}) {
    const bg= [
        "bg-red-200", "bg-amber-200", "bg-lime-200",
        "bg-sky-200", "bg-purple-200"
    ]

    
  return (
    <div className={`rounded-full w-20 h-20 
                    text-2xl font-bold
                    flex justify-center items-center m-2
                   ${bg[Math.floor(n / 10)]}`}>
        {n}
    </div>
  )
}
