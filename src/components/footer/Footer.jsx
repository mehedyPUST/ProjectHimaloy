import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-green-800 mt-20 text-center flex flex-col items-center p-10 space-y-2 '>

            <h2><span className='font-bold text-4xl text-white'>Keen</span><span className='font-semibold text-4xl text-white'>Keeper</span></h2>

            <p className='text-white text-xs font-light'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <h5 className='font-medium text-white'>Social Links</h5>

            <ul className='flex gap-4 items-center'>
                <li className='bg-white p-2 rounded-full '><Link to='/'><AiFillInstagram /></Link></li>
                <li className='bg-white p-2 rounded-full '><Link to='/'><FaFacebookSquare /></Link></li>
                <li className='bg-white p-2 rounded-full '><Link to='/'><FaSquareXTwitter /></Link></li>
            </ul>

            <div className='flex flex-col md:flex-row items-center justify-between font-thin text-sm w-full mt-5 text-white gap-3 md:gap-0'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex items-center gap-5 flex-wrap justify-center'>
                    <p className='cursor-pointer hover:underline transition'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline transition'>Terms of Service</p>
                    <p className='cursor-pointer hover:underline transition'>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;