import React, { useRef, useState, useEffect } from 'react'
import TailSelect from '../component/TailSelect'
import TailButton from '../component/TailButton';
import zcode from './zcode.json'
import zscode from './zscode.json'
import kind from './kind.json';
import TailCard from '../component/TailCard';
import stat from '../18/stat.json'
import TailPageNation from '../component/TailPageNation'


export default function CarMain() {

    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const perPage = 12;
    //동 지역 변수
    const [zs, setZs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    //select box ref
    const kindRef = useRef();
    const zcodeRef = useRef();
    const zscodeRef = useRef();


    const handleKind = () => {
        if (zcodeRef.current.value == "") {
            alert("지역을 선택하세요.");
            zcodeRef.current.focus();
            kindRef.current.value = "";

            return;
        }
        console.log(kindRef.current.value)
    }
    const handleZcode = () => {
        console.log(zcodeRef.current.value)
        setZs(zscode[zcodeRef.current.value])
    }
    const handleZscode = () => {
        console.log(zscodeRef.current.value)
    }

    const handleClick = () => {
        //  getFetchData();

        //  console.log(tdata);

        //  let tm = tdata.map((item) => <TailCard key={item.zscode}
        //                                          title = {item.statNm}
        //                                          subtitle = {item.addr}
        //                                          content ={item.useTime}/>);

        // setTag(tm);

    }

    const getFetchData = async(cpage) => {
        if(zcodeRef.current.value == "") {
            alert("지역을 선택하세요.");
            zscodeRef.current.focus();
            setZs([]);
        }

        if(zscodeRef.current.value= "" && kindRef.current.value == "") {
            alert("지역 동이나 충전소 구분을 선택하세요.");
            zscodeRef.current.focus();
        }

    const apikey = import.meta.env.VITE_DATA_API;
    let url = 'https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?';
     url = `${url}serviceKey=${apikey}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;

     if(zcodeRef.current.value != "") {
        url = `${url}&zcode=${zcodeRef.current.value}`
     }
     if(zscodeRef.current.value != "") {
        url = `${url}&zscode=${zscodeRef.current.value}`
     }
     if(kindRef.current.value != "") {
        url = `${url}&kind=${kindRef.current.value}`
     }

     console.log(url);

    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data.items.item);

    setTotalCount(data.totalCount);
    setTdata(data.items.item);

    }

    useEffect(() => {
        setTotalPage(Math.ceil(totalCount / perPage))
        console.log(totalCount);
        console.log(tdata);
    }, [totalCount, tdata]);

    
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <TailSelect dText = "지역선택"
                    selRef = {zcodeRef}
                    handleSel = {handleZcode}
                    opv = {Object.keys(zcode)}
                    opt = {Object.values(zcode)}/>
        <TailSelect dText = "지역 동 선택"
                    selRef = {zscodeRef}
                    handleSel = {handleZscode}
                    opt = {zs ? Object.keys(zs) : []}
                    opv = {zs ? Object.values(zs) : []}/>
        <TailSelect dText = "충전소 구분"
                    selRef = {kindRef}
                    handleSel = {handleKind}
                    opv = {Object.keys(kind)}
                    opt = {Object.values(kind)}/>
        <TailButton caption="검색"
            color="blue"
            onHandle={() => getFetchData(1)}/>
        </div>
              <div className="w-full grid grid-1 lg:grid-cols-3 gap-4 mt-5
                          ">
        {tdata.map(item=> <TailCard key={item.statId + item.chgerId}  
                                      title={item.statNm}
                                      subtitle={`${item.bnm}(${item.addr},${item.busiCall})`} 
                                      content ={`${item.useTime}
                                      ${stat[item.stat] == undefined ? '' : ','+ stat[item.stat] }
                                      ,주차료${item.parkingFree == 'Y'? '무료' : '유료'}
                                      ,충전방식${item.method}
                                      ,충전용량 ${item.output}kW`}
                                      />)};
      </div>
      <div className='w-full mt-5'>
        <TailPageNation currentPage={currentPage}
                        totalPage={totalPage}
                        onPageChange={getFetchData}/>
        </div>
    </div>
  )
}
