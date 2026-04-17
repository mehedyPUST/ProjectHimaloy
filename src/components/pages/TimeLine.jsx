import React from "react";
import { Link } from "react-router-dom";

const Timeline = () => {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-green-900 text-white px-4 sm:px-6 lg:px-8">

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">

                {/* Icon */}
                <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5">
                    🚧
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    Timeline Coming Soon
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
                    This feature is under construction. We're working hard to launch it soon!
                </p>

                {/* Button */}
                <Link
                    to={"/"}
                    className="mt-8 inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                    ← Back to Home
                </Link>

            </div>
        </div>
    );
};

export default Timeline;