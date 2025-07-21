import React, { useState } from 'react'
import FoodCard from './FoodCard'
import fooddata from './fooddata.json'
import TailButton from '../component/TailButton';

export default function FoodMain() {
    const [tags, setTags] = useState([]);
    let group = fooddata.map(item => item["운영주체 분류"].replace(' ', ''));
    group = [...new Set(group)];
    console.log(group);

    const handleClick = (gubun) => {
        console.log(gubun)

        let tm = fooddata.filter(item =>item["운영주체 분류"].replace(' ', '') == gubun);

        tm = tm.map(item => <FoodCard Key={item["사업장명"]}
                                    item={item}
                                                />); 
        setTags(tm);
    }

    /*{
            fooddata.map(item => <FoodCard Key={item["사업장명"]}
                                    item={item}
                                                />
            )

        } */


  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
        <div className='w-8/10 bg-amber-100 h-20 mb-10 p-5
        flex justify-center items-center'>
            {
            group.map(item => <TailButton key={item}
                                            caption={item}
                                            color="blue"
                                            onHandle={() => handleClick(item)} />)
            
            
            }
        </div>
    
    
    <div  className="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto">
        
        {tags}

    </div>
    </div>
  )
}
