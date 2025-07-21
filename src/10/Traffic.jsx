import React, { useEffect, useState } from 'react'
import TrafficNav from './TrafficNav';

export default function Traffic() {
    //fetch
    const[tdata, setTdata] = useState([]);

    //대분류
    const[c1, setC1] = useState();
    const[selC1, setSelC1] = useState();

    //사고유형
    const[c2, setC2] = useState();
    const[selC2, setSelC2] = useState();

    const[info, setInfo] = useState();
    
    //fetch
    const getFetchData = async() => {
        const baseUrl = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?";
        const url = `${baseUrl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`

        //console.log(url);
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.data);
        console.log("fetch", tdata)

    }


    //컴포넌트가 시작되면 패치
    useEffect(()=> {
        getFetchData();
    },[]);


    //전체 데이터가 fetch되었을때 대분류 생성
    useEffect(()=> {
        if(tdata.length == 0 ) return;
        console.log("tdata", tdata);

        let tm = tdata.map(item => item["사고유형대분류"]);

        tm = [...new Set(tm)];

        setC1(tm);

    }, [tdata]);

    useEffect(()=> {
        if(!tdata || !c1 || !selC1) return;
        setC2([]);
        setSelC2('');
        setInfo('');

        let tm = tdata.filter(item => item["사고유형대분류"] == selC1)
        .map(item => item["사고유형"]);

        tm = [...new Set(tm)];

        setC2(tm);

    }, [selC1]);

    useEffect(()=>{
        if(!selC1 || !selC2) return;

        let tm = tdata.filter(item => item["사고유형대분류"] == selC1 && item["사고유형"]== selC2);

        tm = tm[0];

        //console.log("selC2", tm["사고건수"]);

        let infokey =["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
        tm = infokey.map(item => <div key={item} className="flex text-lg p-2 mx-2
                                          border">
                                <span className="bg-amber-600
                                          p-2
                                          text-white font-bold" >
                                    {item}
                                </span>
                                <span className='text-amber-800
                                          p-2
                                          font-bold'>
                                    {parseInt(tm[item]).toLocaleString()}
                                </span>
        </div>)

        setInfo(tm);

    },[selC2]);

    
  return (
    <div className="w-9/10 flex flex-col justify-center items-center">
          {c1 && <TrafficNav title="대분류"
            ct={c1}
            selc={selC1}
            setSelC={setSelC1} />}

        {c2 && <TrafficNav title="사고유형"
            ct={c2}
            selc={selC2}
            setSelC={setSelC2} />}

        <div className='w-full bg-lime-50 p-5
                     flex justify-between items-center mt-10'>
            {info}
        </div>
            
    </div>
    
  )
}
