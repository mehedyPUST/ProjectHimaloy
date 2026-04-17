import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { loan_due_date, image, name, id, total_deposit, current_loan } = friend;



    return (
        <div
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
        >
            <div className="p-6 flex flex-col items-center text-center">
                <div className="relative">
                    <img
                        className="w-24 h-24 rounded-full object-cover ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition"
                        src={image}
                        alt={name}
                    />

                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500 text-sm mt-1">Total Deposit: {total_deposit} BDT</p>
                <p className="text-gray-500 text-sm mt-1">Current Loan: {current_loan} BDT</p>


                <Link
                    to={`/friend-details/${id}`} className='px-4 py-2 rounded-xl transition-all duration-300 bg-green-600 hover:bg-green-700 text-white  mt-3 w-full'><span className='md:hidden'>Tap for Details</span> <span className='hidden md:block'>See Details</span></Link>



            </div>
        </div>
    );
};

export default FriendsCard;