import React, { useState } from 'react'
import Tailball from '../component/Tailball'
import TailButton from '../component/TailButton'

export default function Lotto() {
    const [lottoTags, setLottoTags] = useState([]);
    const handleClick = () => {
      //로또 번호 생성 버튼이 눌러지면 배열 항상 초기화
      let lottoNum = [];

      while(lottoNum.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1
        //랜덤수 배열 넣기
        if(!lottoNum.includes(n)) lottoNum.push(n)
      }

      let bonus = lottoNum.splice(-1);
      //로또 번호 정렬
      lottoNum.sort((a,b) => a-b);
      //로또 번호 다시 생성
      lottoNum = [...lottoNum, '+' , ...bonus];

       let tm = lottoNum.map(item => item == '+' ? <span className='w-16 mr-5 font-bold'
       key={`n${item}`}>
         {item}
       </span> :  <Tailball key={`n${item}`} n={item}/>
       
      );
      setLottoTags(tm);
        console.log(lottoNum, bonus);
    }

  

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center mb-10 h-10'>
          {lottoTags}
        </div>
        <div className='mt-20'>
        <TailButton caption="로또번호생성" color="blue" onHandle={handleClick}/>
        </div>

    </div>
  )
}
