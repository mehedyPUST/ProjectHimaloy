import React from 'react';
import { FaPlus } from 'react-icons/fa';

const HomePageHeading = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center text-center space-y-3 mt-8 mb-8 md:mt-15 md:mb-15'>

            {/* Heading */}
            <h1 className='font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug'>
                “Friends Who Support One Another Through Halal Help And Mutual Care”
            </h1>

            {/* Subtitle */}
            <p className='text-gray-500 text-sm sm:text-base max-w-2xl'>
                “And cooperate in righteousness and piety, but do not cooperate in sin and aggression.”
                — Qur’an 5:2
            </p>

            {/* Button */}
            <button className='flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-green-800 text-white text-sm sm:text-base hover:bg-green-900 transition'>
                <FaPlus />
                Add a Friend
            </button>

        </div>
    );
};

export default HomePageHeading;