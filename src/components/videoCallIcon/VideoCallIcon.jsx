import React from 'react';
import { CiVideoOn } from 'react-icons/ci';

const VideoCallIcon = () => {
    return (
        <div className="w-16 h-16 bg-rose-100 group-hover:bg-rose-200 rounded-2xl flex items-center justify-center text-3xl transition">
            <CiVideoOn />
        </div>
    );
};

export default VideoCallIcon;