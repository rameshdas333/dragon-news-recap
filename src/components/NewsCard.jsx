import React from 'react';
import { FiBookmark, FiShare } from 'react-icons/fi';
import { IoShareSocialOutline, IoStar } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
  import {  } from "react-icons/ai";

const NewsCard = ({news,onClick,id,selectidx}) => {

     const {title,author,details,total_view,thumbnail_url,rating}= news;
      const totalStars = 5;
    
    return (
        <div>
           <section className='flex justify-between  bg-[#F3F3F3]'>
            <div className='flex gap-4 items-center p-5 '>
               <img className='w-10  h-10 rounded-full' src={author.img} alt="" />
              <div>
                  <p className='text-base font-semibold text-3Fprimary'>{author.name}</p>
                  <p className='text-sm text-6Fprimary'>{author.published_date}</p>
              </div>
                
            </div>
            <div className='flex gap-4 p-5 items-center'>
               <a href=""><FiBookmark className='text-xl'/></a>
               <a href=""><IoShareSocialOutline className='text-xl' /></a>
            </div>
           </section>

           {/*  */}

           <section className='p-5 '>
            <h1 className='text-xl font-bold leading-[35px] text-3Fprimary w-[514px]'>{title}</h1>
            <img className='w-full rounded-[5px] px-5 h-[262px]' src={thumbnail_url} alt="" />
            
               <h3 className={`pt-5 overflow-hidden ${id != selectidx && 'h-[120px]'}`}>{details}</h3>
              
               <button onClick={()=>onClick(id)} className='text-base text-blue-600'>Read more</button>

               <div className='flex justify-between'>
                <div className='flex items-center'>
 
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <IoStar key={index} className="text-gray-500" />
        ) : (
          <IoStar key={index} className="text-yellow-500" />
        );
      })}
    </div>


 <p className='pl-2'>{rating.number} </p>
                </div>
                <div className='flex gap-4 items-center'>
                <a><IoEye/></a>
                <p>{total_view}</p>
                </div>
                
               </div>
           </section>
        </div>
    );
};

export default NewsCard;


   
    // <div>
    //       <h3 className="font-semibold">{article.author.name}</h3>
    //       <p className="text-sm text-gray-500">{article.date}</p>
    //     </div>
    //   </div>

    //   {/* Title */}
    //   <h2 className="text-xl font-bold mb-2">{article.title}</h2>

    //   {/* Main Image */}
    //   <img
    //     src={article.image}
    //     alt={article.title}
    //     className="rounded-lg mb-4"
    //   />

    //   {/* Description */}
     

    //   {/* Read More Button */}
    //   {article.description.length > 300 && (
    //     <button
    //       onClick={() => setExpanded(!expanded)}
    //       className="mt-2 text-blue-500 hover:underline"
    //     >
    //       {expanded ? 'Read less' : 'Read more'}
    //     </button>
    //   )}
    // </div>



