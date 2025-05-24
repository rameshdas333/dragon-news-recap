import React from 'react';
import Header from '../Header/Header';
import LatestNews from '../Latestnews/LatestNews';
import Navbar from '../Navbar/Navbar';
import LeftSide from '../LeftSide/LeftSide';
import MiddleSide from '../MiddleSide/MiddleSide';
import RightSide from '../RightSide/RightSide';
import Container from '../Container';

const HomeLayout = () => {
    return (
        <div className='font-poppinss'>
          <header>
            <Header></Header>
            <section>
              <LatestNews></LatestNews>
            </section>
              </header>
            <nav>
              <Navbar/>
            </nav>
        
        
         <Container>

           <main className='mt-20  gap-5  grid grid-cols-1 lg:grid-cols-4 '>
          <aside className='  border-sky-100 border'>
            <LeftSide></LeftSide>
          </aside>
          <section className='col-span-2  border-sky-100 border'>News coming soon</section>
          <aside className=' border-sky-100 border'><RightSide></RightSide></aside>

          </main>
         </Container>
        </div>
    );
};

export default HomeLayout;