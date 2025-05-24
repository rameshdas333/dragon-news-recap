import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png'


const Navbar = () => {
    return (
        <div>
            <Container>

               <div className=' pt-5  md:flex  justify-between items-center'>
                <div></div>
                <div className='flex text-6Fprimary  gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/career'>Career</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='flex items-center gap-2'>
                   <img className='w-[41px]' src={user} alt="" />
                  <button className="btn px-6 rounded-none text-white btn-neutral">Login</button>
                </div>
               </div>

            </Container>
        </div>
    );
};

export default Navbar;