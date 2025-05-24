import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
    //  const {id }= useParams()
    // console.log(id)
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
       
        .then(data => setCategories(data.data.news_category));

       
    },[])

    // categories.find((item)=>{
    //     if(item.id== id){
    //        console.log(item)
    //     }
    // })
    // console.log(categories)
    return (
        <div>
          <h1 className='font-semibold font-poppinss text-xl text-3Fprimary'>All Caterogy</h1>
        <div className='flex flex-col gap-2 mt-5'>
            
          {
            categories.map((category,idx) =>(

                 <NavLink
                  to={`/category/${category.category_id}`}
                   key={idx} className='btn'>
                    {category.category_name}
                    </NavLink>

            ))
            

          
          }
        </div>
        </div>
    );
};

export default LeftSide;