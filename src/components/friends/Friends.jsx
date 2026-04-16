import React, { useContext } from 'react';
import FriendsCard from './FriendsCard';
import { FriendsContextCreate } from '../../context/FriendsContextCreator';
import { RiseLoader } from 'react-spinners';

const Friends = () => {
    const { friends, loading } = useContext(FriendsContextCreate);

    if (loading) {
        return (
            <div className='w-11/12 mx-auto mt-5'>
                <h3 className='font-bold text-2xl mb-3'>Your Friends</h3>
                <div className="flex justify-center items-center py-10">
                    <RiseLoader color="#10B981" />
                </div>
            </div>
        );
    }

    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h3 className='font-bold text-2xl mb-3'>Your Friends</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {
                    friends.map(friend => (
                        <FriendsCard key={friend.id} friend={friend} />
                    ))
                }
            </div>
        </div>
    );
};

export default Friends;