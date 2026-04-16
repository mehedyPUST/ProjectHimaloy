import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoMdHome } from 'react-icons/io';
import { IoTimeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';
import NavItems from '../navItems/NavItems';

const Navbar = () => {
    return (
        <nav className='w-full mx-auto  mb-5 shadow-xl  py-5 px-10 sticky top-0 z-50 bg-white'>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <div>
                    <NavLink to="/" className='text-3xl font-bold '><span className='text-green-800'>Keen</span><span className='text-[#1F2937]'>Keeper</span></NavLink>
                </div>

                <NavItems></NavItems>

            </div>


        </nav>
    );
};

export default Navbar;