import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';

const HomeLayout = () => {
    return (
        <div>

            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>

            <main className='grid grid-cols-12 py-5 *:border gap-5 w-11/12 mx-auto'>
                <aside className='col-span-3 sticky h-fit top-0'>
             <LeftAside></LeftAside>
                </aside>
                <section className="main-content col-span-6">
                    <Outlet></Outlet>
                </section>
                  <aside className='col-span-3'>
               <RightAside></RightAside>     
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;