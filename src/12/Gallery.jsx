import React, { useRef, useState, useEffect } from 'react'
import GallerySearch from './GallerySearch'
import TailCard from '../component/TailCard'
import TailSearch from '../component/TailSearch';


export default function Gallery() {

    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const kwRef = useRef();

    const getFetchData = async() => {
        const apikey = import.meta.env.VITE_DATA_API;
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = `${url}serviceKey=${apikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = `${url}&keyword=${encodeURI(kwRef.current.value)}&_type=json`;

        console.log(url);

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.response.body.items.item);

    }

    const handleOk = (e) => {
        e.preventDefault();
        console.log(kwRef.current.value)
        getFetchData();
    }

    const handleCancle = (e) => {
        e.preventDefault();
        kwRef.current.value = '';
        kwRef.current.focus();
    }

    useEffect(()=> {
        if(tdata.length == 0) return;
        console.log(tdata)

        let tm = tdata.map((item) => <TailCard key={item.galContentId}
                                        title = {item.galTitle}
                                        subtitle = {item.galPhotographyLocation}
                                        imgurl ={item.galWebImageUrl}
                                        content ={item.galSearchKeyword}/>);

        setTag(tm);

    },[tdata])

   




  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center
                      text-2xl font-bold">
        관광사진갤러리 키워드 검색
      </div>
      <TailSearch kwRef={kwRef} 
                     onOk = {handleOk} 
                     onCancel = {handleCancle} />

      <div className="w-8/10 mt-10
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
         {tag}
      </div>
    </div>
  )
}
