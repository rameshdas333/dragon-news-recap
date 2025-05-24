import React from 'react';
import qzoneimage1 from '../assets/qZone1.png'
import qzoneimage2 from '../assets/qZone2.png'
import qzoneimage3 from '../assets/qZone3.png'
import bg from '../assets/bg.png'

const RightImage = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <h1 className='p-4 text-xl font-semibold'>Q-Zone</h1>
            <div>
                <img className='pb-5'src={qzoneimage1} alt="" />
                <img className='pb-5' src={qzoneimage2} alt="" />
                <img className='pb-5' src={qzoneimage3} alt="" />
            </div>
    {/*  */}
            <div  className='bg-cover bg-center bg-no-repeat  bg-[url(./assets/bg.png)] '>
               
                 <div className='flex justify-center items-center flex-col pb-[65px] h-[509px]'>
                    <h1 className='w-[190px] font-bold px-4 pt-[65px] text-white text-[30px] leading-[45px]'>Create an Amazing Newspaper</h1>
                    <p className='w-[199px] px-4 py-5 text-white text-base'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                    <button className='btn bg-red-500  border-0 text-white rounded-none '>Learn More</button>
                 </div>
               
                    
                    </div>
               
           
        </div>
    );
};

export default RightImage;