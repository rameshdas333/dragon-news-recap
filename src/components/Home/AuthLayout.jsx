import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';
import Navbar from '../Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className=' bg-[#F3F3F3] font-poppinss'>
            <Container>
           <header className='py-3'>
                <Navbar></Navbar>
           </header>
          <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default AuthLayout;