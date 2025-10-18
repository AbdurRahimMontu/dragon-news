import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 w-11/12 mx-auto gap-5 items-center py-5'>
            <div className='col-span-3'></div>
           <nav className='col-span-6 text-center space-x-5'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Career</NavLink>
           </nav>
           <div className="login col-span-3 flex justify-center gap-5 ">
            <img src={user}alt="" />
            <button className='btn btn-primary'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;