import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const VoiceCallIcon = () => {
    return (
        <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center text-3xl transition">
            <FiPhoneCall />
        </div>
    );
};

export default VoiceCallIcon;