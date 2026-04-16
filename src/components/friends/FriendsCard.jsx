import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { tags, status, days_since_contact, picture, name, id } = friend;

    const getStatusColor = (status) => {
        if (status === 'Overdue') return 'bg-red-100 text-red-700 border-red-200';
        if (status === 'Almost Due') return 'bg-amber-100 text-amber-700 border-amber-200';
        if (status === 'On-Track') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        return 'bg-gray-100 text-gray-700 border-gray-200';
    };

    return (
        <Link
            to={`/friend-details/${id}`}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
        >
            <div className="p-6 flex flex-col items-center text-center">
                <div className="relative">
                    <img
                        className="w-24 h-24 rounded-full object-cover ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition"
                        src={picture}
                        alt={name}
                    />

                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-500 text-sm mt-1">{days_since_contact} Days Ago</p>

                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={`mt-6 px-4 py-2 rounded-3xl text-sm font-semibold border ${getStatusColor(status)}`}>
                    {status}
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;