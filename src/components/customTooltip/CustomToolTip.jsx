import React from 'react';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900 text-white px-4 py-3 rounded-2xl text-sm shadow-xl">
                <p className="font-semibold">{payload[0].name}</p>
                <p>Count: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;