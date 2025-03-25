'use client'
import React, { useState } from 'react';

const Condition = [
    {
        condition: '128 GB',
        price: '$347.00',
    },
    {
        condition: 'Good',
        price: '$399.00',
    },
    {
        condition: 'Excellent',
        price: '$492.00',
    },
];

const StorageSelector = () => {
    // Set the default selected state to 0 (which corresponds to 128 GB)
    const [selected, setSelected] = useState(0);

    const handleRadioChange = (index) => {
        setSelected(index);
    };

    return (
        <div className='space-y-3 my-4'>
            <h2 className="text-[1.5rem] leading-[1.5rem] tracking-[0] font-bold italic">Select storage</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Condition.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${selected === index ? "border-black bg-[#f6f2fd]" : "border-gray-500 bg-white"} flex items-center gap-4 p-2 rounded-md cursor-pointer`}
                        onClick={() => handleRadioChange(index)}
                    >
                        <div
                            className={`border border-black h-4 w-4 rounded-full transition-all duration-300 ${selected === index ? 'bg-black' : 'bg-white'}`}
                        />

                        <h3 className='text-black text-base font-medium grow'>{item.condition}</h3>
                        <p className='text-gray-500 text-sm'>{item.price}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorageSelector;
