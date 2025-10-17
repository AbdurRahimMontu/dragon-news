import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Marque from '../Components/Marque';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <Marque></Marque>
            <main>
                <section className="left-content"></section>
                <section className="main-content">
                    <Outlet></Outlet>
                </section>
                <section className="right-content"></section>
            </main>
        </div>
    );
};

export default HomeLayout;