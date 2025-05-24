import React from 'react';
import Logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className=' flex flex-col justify-center items-center '>
           <div className='pt-12 pb-5'>
             <img className='w-[471px]  text-[60px]' src={Logo} alt="" />
           </div>
            <h1 className='text-[18px]  text-6Fprimary leading-[30px]'>Journalism Without Fear or Favour</h1>
          <p className='text-[20px]  text-3Fprimary leading-[30px]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;