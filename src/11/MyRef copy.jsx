import React, { useRef, useState } from 'react'
import TailButton from '../component/TailButton'

export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;

    //상태 변수
    const [scnt, setScnt] = useState(0);

    const rcnt = useRef(0);

    const handleCnt = () => {
        cnt = cnt + 1;
        console.log("cnt=", cnt);
    }

    const handleScnt = () => {
        setScnt(scnt + 1);
    }

    const handleRcnt = () => {
        rcnt.current = rcnt.current +1;
        console.log("refCnt=", rcnt.current);
    }

  return (

    <div>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            <div className="text-blue-600 text-lg font-bold">
                컴포넌트 변수 : {cnt}
            </div>
            <div className="text-orange-600 text-lg font-bold">
                State 변수 : {scnt}
            </div>
            <div className="text-lime-600 text-lg font-bold">
                Ref 변수 : {rcnt.current}
            </div>
            <TailButton caption="컴포넌트 변수 증가" color="blue"
                            onHandle={handleCnt}></TailButton>
            <TailButton caption="State 변수 증가" color="blue" onHandle={handleScnt}></TailButton>
            <TailButton caption="Ref 변수 증가" color="blue" onHandle={handleRcnt}></TailButton>
        </div>
    </div>
  )
}
