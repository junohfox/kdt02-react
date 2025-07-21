import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);

    const [tag, setTag] = useState([]);

    const [info, setInfo] = useState('');

    const [dt, setDt] = useState();

    const refDt = useRef();

    const getYesterday = () => {
        let dt = new Date();

        dt.setDate(dt.getDate()-1);

        let year = dt.getFullYear();

        let month = String(dt.getMonth() + 1).padStart(2, '0');
        let day = String(dt.getDate()).padStart(2, '0');


        return (year + '-' + month + '-' + day);
    }


     //영화정보
  const handleShow = (item) => {
    console.log(item)
    setInfo(`(${item.movieCd}) 개봉일 ${item.openDt} ${item.movieNm} 
              상영스크린수 ${item.scrnCnt}, 상영횟수 ${item.showCnt}`);
    }

    const handleChange = () => {
        setInfo('');
        setDt(refDt.current.value);
    }

    //일일오피스정보 가져오기
    const getFetchData = async () => {
        console.log("dt=", dt)
        const apikey = import.meta.env.VITE_MV_API;
        //const dt = "20250702";
        let tmdt = dt.replaceAll('-', '');

        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = `${url}key=${apikey}&targetDt=${tmdt}`;

        //console.log("apikey", apikey)

        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList);
        console.log("data", data.boxOfficeResult.dailyBoxOfficeList)

    }


    useEffect(()=>{
        let tm = tdata.map(item => 
            <tr key={item.movieCd} 
            onClick={()=> handleShow(item)}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200
            hover:bg-gray-100 hover:text-blue-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                </th>
                <td className="px-6 py-4">
                    {item.movieNm}
                </td>
                <td className="px-6 py-4 text-right" >
                   
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                    
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                   
                    {parseInt(item.salesAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                
                    {parseInt(item.audiAcc).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                    {item.rankOldAndNew == 'OLD'? ""
                     : <span className='font-bold text-red-300'>New</span>} 
                </td>
            </tr>);
        setTag(tm);
    }, [tdata]);

    useEffect(()=>{
        setDt(getYesterday());
        refDt.current.max = getYesterday();
    }, []);

    useEffect(()=> {
        if(!dt) return;
        refDt.current.value = dt;
        getFetchData();

    }, [dt]);


  return (
<div className="relative overflow-x-auto">
    <div>
        <span>날짜선택</span>
        <input type="date" ref={refDt}
        className='p-2 border' onChange={handleChange} id = "dt" />

    </div>


    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    순위
                </th>
                <th scope="col" className="px-6 py-3">
                    영화명
                </th>
                <th scope="col" className="px-6 py-3">
                    매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    누적매출액
                </th>
                <th scope="col" className="px-6 py-3">
                    누적관객수
                </th>
                <th scope="col" className="px-6 py-3">
                    신규진입여부
                </th>
            </tr>
        </thead>
        <tbody>
            {tag}
        </tbody>
        <tfoot>
            <tr className="text-md h-12 font-bold text-gray-900 bg-gray-100
                            border-y-2">
                <td colSpan="7" className='font-bold text-center'>
                {info}
                </td>
            </tr>
        </tfoot>
    </table>
</div>

  )
}
