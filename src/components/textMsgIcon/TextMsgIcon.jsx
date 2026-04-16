import React from 'react';
import { MdOutlineTextsms } from 'react-icons/md';

const TextMsgIcon = () => {
    return (
        <div className="w-16 h-16 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center text-3xl transition">
            <MdOutlineTextsms />
        </div>
    );
};

export default TextMsgIcon;