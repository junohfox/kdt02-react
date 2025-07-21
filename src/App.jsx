import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GroupText from './01/GroupText';
import MyClock from './02/MyClock';
import MyDiv from './03/MyDiv';
import MyListItem from './04/MyListItem';
import MyList from './04/MyList';
import Lotto from './05/lotto';
import FoodMain from './06/FoodMain';
import MyToggle from './07/MyToggle';
import MyEffect from './08/MyEffect';
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
import MyRef from './11/MyRef';
import Gallery from './12/Gallery';
import Festival from './13/Festival';
import Fcst from './15/Fcst'
import FcstList from './15/FcstList'


import AppNav from './AppNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyDiv1 from './16/MyDiv1';
import MyDivMain from './17/MyDivMain';
import CarMain from './18/CarMain';

function App() {
    

  return (
    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto
            flex flex-col justify-start items-start
            bg-amber-50">
    <header className='w-full min-h-20
    bg-amber-100 flex justify-between items-center'>

      <div className="flex ml-10">
        <img src={reactLogo} alt="react" /> + 
        <img src="/vite.svg" alt="" />

      </div>
      <AppNav />
      <GroupText></GroupText>

    </header>
    <main className='w-full flex-grow
    overflow-y-auto py-10
    flex flex-col justify-start items-center'>
        
        
       <Routes>
          <Route path='/' element={<MyClock />} />
          <Route path='/lotto' element={<Lotto />} />
          <Route path='/food' element={<FoodMain />} />
          <Route path='/box' element={<BoxOffice />} />
          <Route path='/traffic' element={<Traffic />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/festival' element={<Festival />} />
          <Route path='/fcst' element={<Fcst />} />
          <Route path='/fcstlist' element={<FcstList />} />
          <Route path='/mydivmain' element={<MyDivMain />} />
          <Route path='/carmain' element={<CarMain />} />
        </Routes>
        
        

    </main>
    <footer className='w-full min-h-20 
    bg-black text-white flex justify-center items-center'>
      k-digital 2025 2기

    </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
