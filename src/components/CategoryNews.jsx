import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    const [selectidx,setSelectidx]  = useState("");
    const clickhandler = (i)=>{
       
        setSelectidx(i)
    }
    return (

        <div>
            <h1 className='text-xl font-semibold pb-5' >Dragon News Home{news.length}</h1>

            <div>
                {
                   news.map((categoryNews,idx) =><NewsCard key={idx} onClick={clickhandler} id={idx} selectidx={selectidx} news={categoryNews}></NewsCard> )
                  
                }
            </div>


        </div>
    );
};

export default CategoryNews;