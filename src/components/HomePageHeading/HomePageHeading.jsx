import React from 'react';
import { FaPlus } from 'react-icons/fa';

const HomePageHeading = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center space-y-2 mt-10 mb-10 md:mt-15 md:mb-15'>
            <h1 className='font-extrabold text-3xl'>Friends to Keep Close in Your Life</h1>
            <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-green-800 text-white'> <FaPlus /> Add a Friend</button>
        </div>
    );
};

export default HomePageHeading;