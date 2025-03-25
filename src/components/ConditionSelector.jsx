'use client'
import React, { useState } from 'react';

const Condition = [
    {
        condition: 'Fair',
        price: '$283.00',
    },
    {
        condition: 'Good',
        price: '$309.00',
    },
    {
        condition: 'Excellent',
        price: '$301.00',
    },
    {
        condition: 'Premium',
        price: '$347.00',
    }
];

const ConditionSelector = () => {
    // Set the default selected state to 0 (which corresponds to "Fair")
    const [selected, setSelected] = useState(0);

    const handleRadioChange = (index) => {
        setSelected(index);
    };

    return (
        <div className='space-y-3 my-4'>
            <h2 className="text-[1.5rem] leading-[1.5rem] tracking-[0] font-bold italic">Select the condition</h2>
            <div className="rounded-md flex items-center justify-between gap-4 p-2 bg-[#d9e4fc]">
                <svg aria-hidden="true" fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M3.69 3h16.62a1.58 1.58 0 0 1 1.581 1.577v14.846A1.58 1.58 0 0 1 20.31 21H3.69a1.579 1.579 0 0 1-1.581-1.577V4.577A1.579 1.579 0 0 1 3.69 3m5.933 14.453h3.262a.1.1 0 0 0 .07-.17l-5.167-5.167a.166.166 0 0 1 0-.233l5.167-5.168a.1.1 0 0 0-.07-.17H9.623a.39.39 0 0 0-.277.116l-5.222 5.222a.166.166 0 0 0 0 .233l5.222 5.222a.39.39 0 0 0 .277.115m10.173-.17-5.168-5.167a.166.166 0 0 1 0-.234l5.168-5.168a.1.1 0 0 0-.071-.17h-3.262a.39.39 0 0 0-.277.116l-5.222 5.222a.166.166 0 0 0 0 .233l5.222 5.223a.39.39 0 0 0 .277.115h3.262a.1.1 0 0 0 .07-.17"></path>
                </svg>
                <p className='text-[.875rem] leading-[1.25rem] tracking-[0] '>Refurbishers have restored devices to high quality based on a 25-point inspection. Compare conditions</p>
                <div>&#10095;</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Condition.map((item, index) => (
                    <div
                        key={index}
                        className={`border ${selected === index ? "border-black bg-[#f6f2fd]" : "border-gray-500 bg-white"} flex items-center gap-4 p-2 rounded-md cursor-pointer`}
                        onClick={() => handleRadioChange(index)}
                    >
                        <div
                            className={`border border-black h-4 w-4 rounded-full transition-all duration-300 ${selected === index ? 'bg-black' : 'bg-white'}`}
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

export default ConditionSelector;
