// import React from 'react';
// import { GoGraph } from 'react-icons/go';
// import { IoMdHome } from 'react-icons/io';
// import { IoTimeOutline } from 'react-icons/io5';
// import { NavLink } from 'react-router';
// import NavItems from '../navItems/NavItems';

// const Navbar = () => {
//     return (
//         <nav className='w-full mx-auto  mb-5 shadow-xl  py-5 px-10 sticky top-0 z-50 bg-white'>
//             <div className='flex flex-col sm:flex-row items-center justify-between'>
//                 <div>
//                     <NavLink to="/" className='text-3xl font-bold '><span className='text-green-800'>Project</span><span className='text-[#1F2937]'>Himaloy</span></NavLink>
//                 </div>

//                 <NavItems></NavItems>

//             </div>


//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import NavItems from "../navItems/NavItems";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full mx-auto mb-5 shadow-xl py-5 px-6 sm:px-10 sticky top-0 z-50 bg-white">

            <div className="flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="text-2xl sm:text-3xl font-bold">
                    <span className="text-green-800">Project</span>
                    <span className="text-gray-800">Himaloy</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <NavItems />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4">
                    <NavItems onClick={() => setOpen(false)} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;