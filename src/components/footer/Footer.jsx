import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-green-800 mt-16 text-center text-white'>

            <div className='w-11/12 mx-auto py-10 flex flex-col items-center space-y-6'>

                {/* Logo */}
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                    Project <span className='font-light'>Himaloy</span>
                </h2>

                {/* Description */}
                <p className='text-xs sm:text-sm md:text-base text-white/80 max-w-xl'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Title */}
                <h5 className='font-medium text-sm sm:text-base'>
                    Social Links
                </h5>

                {/* Social Icons */}
                <ul className='flex gap-4 sm:gap-6 items-center'>
                    <li className='bg-white text-green-800 p-2 sm:p-3 rounded-full hover:scale-110 transition'>
                        <Link to='/'>
                            <AiFillInstagram />
                        </Link>
                    </li>

                    <li className='bg-white text-green-800 p-2 sm:p-3 rounded-full hover:scale-110 transition'>
                        <Link to='/'>
                            <FaFacebookSquare />
                        </Link>
                    </li>

                    <li className='bg-white text-green-800 p-2 sm:p-3 rounded-full hover:scale-110 transition'>
                        <Link to='/'>
                            <FaSquareXTwitter />
                        </Link>
                    </li>
                </ul>

                {/* Bottom Section */}
                <div className='w-full border-t border-white/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/80'>

                    <p className='text-center md:text-left'>
                        © 2026 Project Himaloy. All rights reserved.
                    </p>

                    <div className='flex flex-wrap justify-center gap-4'>
                        <p className='cursor-pointer hover:underline'>Privacy Policy</p>
                        <p className='cursor-pointer hover:underline'>Terms of Service</p>
                        <p className='cursor-pointer hover:underline'>Cookies</p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;