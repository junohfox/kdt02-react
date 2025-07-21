import React from 'react'
import MyToggleBox from './MyToggleBox'

export default function MyToggle() {
  return (
    <div className='w-10/12 grid grid-col-1 lg:grid-cols-2 gap-4'>
    <MyToggleBox color="blue"/>
    <MyToggleBox color="orange"/>
    <MyToggleBox color="lime"/>
    </div>
  )
}
