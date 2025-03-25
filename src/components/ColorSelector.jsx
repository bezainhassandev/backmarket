'use client'
import React, { useState } from 'react';

const Condition = [
    {
        condition: 'Midnight',
        price: '$283.00',
        color: '#182028'
    },
    {
        condition: 'Red',
        price: '$309.00',
        color: '#ff0000'
    },
    {
        condition: 'Blue',
        price: '$301.00',
        color: '#9cb0c4'
    },
    {
        condition: 'Starlight',
        price: '$347.00',
        color: '#eee935'
    },
    {
        condition: 'Pink',
        price: '$347.00',
        color: '#fce7e7'
    },
    {
        condition: 'Green',
        price: '$347.00',
        color: '#d9efd5'
    },
];

const ColorSelector = () => {
    const [selected, setSelected] = useState(0);

    const handleRadioChange = (index) => {
        setSelected(index);
    };

    return (
        <div className='space-y-3 my-4'>
            <h2 className="text-[1.5rem] leading-[1.5rem] tracking-[0] font-bold italic">Select the color</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Condition.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${selected === index ? "border-black bg-[#f6f2fd]" : "border-gray-500 bg-white"} flex items-center gap-4 p-2 rounded-md cursor-pointer`}
                        onClick={() => handleRadioChange(index)}
                    >
                        <div
                            className={`border border-black h-4 w-4 rounded-full transition-all duration-300`}
                            style={{ backgroundColor: item.color }}
                        />

                        <div>
                            <h3 className='text-black text-base font-medium'>{item.condition}</h3>
                            <p className='text-gray-500 text-sm'>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorSelector;
