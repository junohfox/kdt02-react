import React from 'react'
import TailButton from '../component/TailButton'

export default function GallerySearch({title, refInput, handleClick}) {
  return (
    <>
        <h1>
            {title}
        </h1>
        <form>
            <input type="text" id="kw"
            ref = {refInput}
            className='block p-1' />
        
        <div>
            <TailButton caption="확인"
                color="blue"
                onHandle={handleClick}/>
            <TailButton caption="취소"
                color="blue"
                onHandle={handleClick}/>
        </div>
        </form>
    </>
    
  )
}
