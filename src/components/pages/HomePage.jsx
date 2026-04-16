import React, { Suspense } from 'react';
import HomePageHeading from '../HomePageHeading/HomePageHeading';
import CategoryCounterCards from '../categorycounterCards/CategoryCounterCards';
import Friends from '../friends/Friends';
import { RiseLoader } from 'react-spinners';


const HomePage = () => {
    return (
        <div>
            <HomePageHeading></HomePageHeading>
            <CategoryCounterCards></CategoryCounterCards>
            <Suspense fallback={<div className='flex items-center justify-center'>
                <RiseLoader color='#15803d' />
            </div>}>
                <Friends></Friends>
            </Suspense>

        </div>
    );
};

export default HomePage;