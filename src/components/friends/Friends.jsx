import React, { useContext } from "react";
import FriendsCard from "./FriendsCard";
import { FriendsContextCreate } from "../../context/FriendsContextCreator";
import { RiseLoader } from "react-spinners";

const Friends = () => {
    const { friends, loading } = useContext(FriendsContextCreate);

    if (loading) {
        return (
            <div className="w-11/12 mx-auto mt-8">

                {/* Heading skeleton */}
                <div className="mb-6 text-center sm:text-left">
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
                        Honorable Members
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Loading your friends data...
                    </p>
                </div>

                {/* Loader */}
                <div className="flex justify-center items-center py-16">
                    <RiseLoader color="#10B981" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto mt-8">

            {/* Header */}
            <div className="mb-6 text-center sm:text-left">
                <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
                    Honorable Members
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    Connect, support, and maintain meaningful relationships
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {friends?.map((friend) => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default Friends;