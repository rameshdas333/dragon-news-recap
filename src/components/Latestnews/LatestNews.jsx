import React from 'react';
import Container from '../Container';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
       <div className='mt-[30px]'>
      
       <Container>

              <div className=' p-4 bg-[#F3F3F3] flex gap-2 items-center'>
            <p className='bg-red-500 text-white px-6 py-2 font-medium text-[20px]'>Latest</p>
           <Marquee speed={100} pauseOnHover={true} className='space-x-10'>
            <Link to='/news'>
             <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, perspiciatis! </p>
            </Link>
            <Link to='/news'>
             <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, perspiciatis! </p>
            </Link>
            <Link to='/news'>
             <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, perspiciatis! </p>
            </Link>
           </Marquee>
        </div>
       </Container>
      
       </div>
    );
};

export default LatestNews;